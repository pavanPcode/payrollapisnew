const sql = require("mssql");
const PrimeDB = require("../dataContext/PrimeDBContext");
const LiteDB = require("../dataContext/LiteDBContext"); // For LITE users
const StandardDB = require("../dataContext/StandardDBContext"); // For STANDARD users
const PremiumDB = require("../dataContext/PremiumDBContext"); // For PREMIUM users

class roleMenu {
  GetMenu(JsonData, callback) {
    const sqlQuery = `;WITH HasRole AS (
            SELECT CASE WHEN EXISTS (
                SELECT 1 FROM PROD.OrgRoleMenu WHERE RoleId = ${JsonData.RoleId}
            ) THEN 1 ELSE 0 END AS HasData
        ),
        MenuSource AS (
            SELECT v.*, 
                CASE 
                    WHEN v.SuperId = ${JsonData.SuperId} THEN 1
                    WHEN v.SuperId = 31113 THEN 2
                    ELSE 3
                END AS Priority,
                h.HasData
            FROM PROD.V_ActiveMenuItems v
            CROSS JOIN HasRole h
            WHERE 
                v.RoleId = ${JsonData.RoleId}
                AND v.[Read] = 1       
        ),
        Dedup AS (
            SELECT *
            FROM (
                SELECT *,
                    ROW_NUMBER() OVER(PARTITION BY Id ORDER BY Priority) AS rn
                FROM MenuSource
                WHERE 
                    (HasData = 0 AND SuperId IN (${JsonData.SuperId}, 31113) AND IsActive = 1)
                    OR (HasData = 1)
            ) x
            WHERE rn = 1
        )
        SELECT *
        FROM Dedup
        ORDER BY SortOrder;
        `;

    PremiumDB.executeQuery(sqlQuery)
      .then((results) => callback(null, results))
      .catch(callback);
  }

  GetPermissions(JsonData, callback) {
    const sqlQuery = `
      DECLARE @menucount INT;

      SELECT @menucount = COUNT(id)
      FROM prod.menu 
      WHERE ParentMenuId IN (
          SELECT id FROM prod.menu WHERE ParentMenuId = ${JsonData.subMenuId}
      );

      IF @menucount = 0
      BEGIN

          ;WITH MenuSource AS (
              SELECT 
                  rm.RoleId, rm.menuid, rm.[Read], rm.[Write], rm.[Delete], 
                  rm.[Export], rm.SuperId, am.MenuName, am.path, am.fonticon, rm.id,
                  CASE 
                      WHEN rm.SuperId = ${JsonData.SuperId} THEN 1
                      WHEN rm.SuperId = 31113 THEN 2
                      ELSE 3
                  END AS Priority
              FROM prod.OrgRoleMenu rm
              INNER JOIN prod.menu am ON am.id = rm.menuid
              WHERE rm.RoleId = ${JsonData.RoleId}
                AND rm.IsActive = 1 
                AND am.IsActive = 1 
                AND rm.SuperId IN (31113, ${JsonData.SuperId})
                AND am.ModuleId = ${JsonData.ModuleId}
                 AND (am.ParentMenuId = ${JsonData.subMenuId} or IsParent = 0)
          ),
          Dedup AS (
              SELECT *
              FROM (
                  SELECT *,
                      ROW_NUMBER() OVER(PARTITION BY menuid ORDER BY Priority) AS rn
                  FROM MenuSource
              ) x
              WHERE rn = 1
          )
          SELECT *
          FROM Dedup
          ORDER BY menuid;

      END
      ELSE
      BEGIN

          ;WITH MenuSource AS (
              SELECT 
                  rm.RoleId, rm.menuid, rm.[Read], rm.[Write], rm.[Delete], 
                  rm.[Export], rm.SuperId, am.MenuName, am.path, am.fonticon, rm.id,
                  CASE 
                      WHEN rm.SuperId = ${JsonData.SuperId} THEN 1
                      WHEN rm.SuperId = 31113 THEN 2
                      ELSE 3
                  END AS Priority
              FROM prod.OrgRoleMenu rm
              INNER JOIN prod.menu am ON am.id = rm.menuid
              WHERE rm.RoleId = ${JsonData.RoleId}
                AND rm.IsActive = 1 
                AND am.IsActive = 1 
                AND rm.SuperId IN (31113, ${JsonData.SuperId})
                AND am.ModuleId = ${JsonData.ModuleId}
                AND am.ParentMenuId IN (
                      SELECT id FROM prod.menu WHERE ParentMenuId = ${JsonData.subMenuId}
                )
          ),
          Dedup AS (
              SELECT *
              FROM (
                  SELECT *,
                      ROW_NUMBER() OVER(PARTITION BY menuid ORDER BY Priority) AS rn
                  FROM MenuSource
              ) x
              WHERE rn = 1
          )
          SELECT *
          FROM Dedup
          ORDER BY menuid;

      END;
`;

    PremiumDB.executeQuery(sqlQuery)
      .then((results) => callback(null, results))
      .catch(callback);
  }

  UpdatePermissions(JsonData, callback) {
    const { updateId, superId, permissions } = JsonData;

    const sqlQuery = `
       BEGIN
      UPDATE prod.OrgRoleMenu
      SET [Read] = ${permissions.read},
          [Write] = ${permissions.write},
          [Delete] = ${permissions.delete},
          [Export] = ${permissions.export}
      WHERE id = ${updateId}
        AND superid = ${superId};

      -- Step 2: Insert a **copy** of updateId record IF it does not exist
      IF NOT EXISTS (
          SELECT 1 
          FROM prod.OrgRoleMenu 
          WHERE id = ${updateId} AND superid = ${superId}
      )
      BEGIN
          INSERT INTO prod.OrgRoleMenu
              (SuperId, RoleId, MenuId, [Read], [Write], [Delete], [Export], RemoveAccess, IsActive, CreatedBy)
          SELECT 
              ${superId},       
              RoleId,             
              MenuId,            
              ${permissions.read},
              ${permissions.write},
              ${permissions.delete},
              ${permissions.export},
              RemoveAccess,
              IsActive,
              CreatedBy
          FROM prod.OrgRoleMenu
          WHERE id = ${updateId};
      END
   END
  `;

    PremiumDB.executeQuery(sqlQuery)
      .then((results) => callback(null, results))
      .catch(callback);
  }

  GetMenuNodes(results, callback) {
    if (!results || results.length === 0) {
      return callback(new Error("no Results"));
    }
    const menuNodes = this.buildMenuHierarchy(results);
    callback(null, menuNodes);
  }

  buildMenuHierarchy(menuItems) {
    const menuLookup = {};
    menuItems.forEach((menu) => {
      menuLookup[menu.Id] = {
        AppMenuId: menu.Id,
        ReportId: menu.ReportId,
        label: menu.MenuName,
        link: menu.Path,
        icon: menu.FontIcon,
        submenuItems: [],
      };
    });

    const rootMenus = [];

    menuItems.forEach((menu) => {
      if (menu.ParentMenuId === 0) {
        rootMenus.push(menuLookup[menu.Id]);
      } else {
        if (menuLookup[menu.ParentMenuId]) {
          menuLookup[menu.ParentMenuId].submenuItems.push(menuLookup[menu.Id]);
        }
      }
    });
    return rootMenus;
  }
}

module.exports = new roleMenu();
