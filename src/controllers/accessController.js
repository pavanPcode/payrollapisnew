const express = require("express");
const router = express.Router();
const {
  DbDataByOperationId,
  DbDataByOperationId_no_Res,
} = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require("../middlewares/authMiddleware");
const { utilityhandleResponse } = require("../utils/responseHandler");
const { RequestError } = require("mssql");
const exeQuery = require("./roleMenu.js");

router.post("/addmobileaccess", validateToken, async (req, res, next) => {
  const Data = req.body;
  const userObj = req.user;
  console.log(Data);
  return DbDataByOperationId(
    Data,
    userObj,
    res,
    OperationEnums().addmobileAccess
  );
});

router.post("/addempportalaccess", validateToken, async (req, res, next) => {
  const Data = req.body;
  const userObj = req.user;
  console.log(Data);
  return DbDataByOperationId(
    Data,
    userObj,
    res,
    OperationEnums().adempprtalAces
  );
});

router.post("/removeempportalaccess", validateToken, async (req, res, next) => {
  const Data = req.body;
  const userObj = req.user;
  console.log(Data);
  return DbDataByOperationId(
    Data,
    userObj,
    res,
    OperationEnums().rememppotalAces
  );
});

router.post("/removemobileaccess", validateToken, async (req, res, next) => {
  const Data = req.body;
  const userObj = req.user;
  console.log(Data);
  return DbDataByOperationId(
    Data,
    userObj,
    res,
    OperationEnums().removemobAces
  );
});

router.get("/getmenu", (req, res) => {
  const { RoleId } = req.query;
  const { SuperId } = req.query;
  const JsonData = { RoleId: RoleId, SuperId: SuperId };
  exeQuery.GetMenu(JsonData, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    exeQuery.GetMenuNodes(results, (err, MenuList) => {
      if (err) {
        return res.status(500).json({ error: err.message, Status: false });
      }
      res.json({
        ResultData: MenuList,
        Status: true,
      });
    });
  });
});

router.get("/getPermissions", (req, res) => {
  const { RoleId } = req.query;
  const { SuperId } = req.query;
  const { subMenuId } = req.query;
  const { ModuleId } = req.query;

  const JsonData = {
    RoleId: RoleId,
    SuperId: SuperId,
    subMenuId: subMenuId,
    ModuleId: ModuleId,
  };
  exeQuery.GetPermissions(JsonData, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({
      ResultData: results,
      Status: true,
    });
  });
});

router.get("/getSubMenu", validateToken, async (req, res, next) => {
  const Data = req.body;
  const userObj = req.user;
  return DbDataByOperationId(Data, userObj, res, OperationEnums().getSubMenu);
});

router.get("/getRoles", validateToken, async (req, res, next) => {
  const Data = req.body;
  const userObj = req.user;
  return DbDataByOperationId(Data, userObj, res, OperationEnums().getRoles);
});

router.get("/getModules", validateToken, async (req, res, next) => {
  const Data = req.body;
  const userObj = req.user;
  return DbDataByOperationId(Data, userObj, res, OperationEnums().getModules);
});

router.post("/updatePermissions", (req, res) => {
  exeQuery.UpdatePermissions(req.body, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({
      ResultData: results,
      Status: true,
    });
  });
});
module.exports = router;
