const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger configuration
const swaggerOptionsAll = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Pereco API Documentation",
    },
  },
  apis: ["./src/Swaggerdocs/*.js"], // Load all API documentation files
};
const swaggerOptionsAttendance = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Pereco APIs Attendance Documentation",
    },
  },
  apis: ["./src/Swaggerdocs/AttendanceDocs.js"], // Load all API documentation files
};
const swaggerOptionsDepartment = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Pereco APIs Department Documentation",
    },
  },
  apis: ["./src/Swaggerdocs/DepartmentDocs.js"], // Load all API documentation files
};
const swaggerOptionsemp = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Pereco APIs emp Documentation",
    },
  },
  apis: ["./src/Swaggerdocs/empDocs.js"], // Load all API documentation files
};
const swaggerOptionsholidays = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Pereco APIs holidays Documentation",
    },
  },
  apis: ["./src/Swaggerdocs/holidaysDocs.js"], // Load all API documentation files
};
const swaggerOptionsleaves = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Pereco APIs leaves Documentation",
    },
  },
  apis: ["./src/Swaggerdocs/leaveDocs.js"], // Load all API documentation files
};
const swaggerOptionsNotification = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Pereco APIs Notification Documentation",
    },
  },
  apis: ["./src/Swaggerdocs/NotificationDocs.js"], // Load all API documentation files
};
const swaggerOptionsProjects = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Pereco APIs Projects Documentation",
    },
  },
  apis: ["./src/Swaggerdocs/ProjectsDocs.js"], // Load all API documentation files
};
const swaggerOptionsTeam = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Pereco APIs Team Documentation",
    },
  },
  apis: ["./src/Swaggerdocs/teamDocs.js"], // Load all API documentation files
};
const swaggerOptionsuser = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Pereco APIs user Documentation",
    },
  },
  apis: ["./src/Swaggerdocs/userDocs.js"], // Load all API documentation files
};
const swaggerOptionsVisiting = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Pereco APIs Visiting Documentation",
    },
  },
  apis: ["./src/Swaggerdocs/VisitingDocs.js"], // Load all API documentation files
};
// const swaggerOptionsbranch = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "My API",
//       version: "1.0.0",
//       description: "Pereco APIs branch Documentation",
//     },
//   },
//   apis: ["./src/Swaggerdocs/branchDocs.js"], // Load all API documentation files
// };

// Generate Swagger docs
const swaggerSpecAll = swaggerJsdoc(swaggerOptionsAll);
const swaggerSpecAttendance = swaggerJsdoc(swaggerOptionsAttendance);
const swaggerSpecDepartment= swaggerJsdoc(swaggerOptionsDepartment);
const swaggerSpecemp = swaggerJsdoc(swaggerOptionsemp);
const swaggerSpecholidays = swaggerJsdoc(swaggerOptionsholidays);
const swaggerSpecleaves = swaggerJsdoc(swaggerOptionsleaves);
const swaggerSpecNotification = swaggerJsdoc(swaggerOptionsNotification);
const swaggerSpecProjects = swaggerJsdoc(swaggerOptionsProjects);
const swaggerSpecTeam = swaggerJsdoc(swaggerOptionsTeam);
const swaggerSpecuser = swaggerJsdoc(swaggerOptionsuser);
const swaggerSpecAtVisiting = swaggerJsdoc(swaggerOptionsVisiting);
// const swaggerSpecAtbranch = swaggerJsdoc(swaggerOptionsbranch);


const swaggerDocs = (app) => {
  // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecAll));
  // app.use("/api-docs", swaggerUi.serve);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecAll));
  // app.use("/api-docs/Attendance",  swaggerUi.setup(swaggerSpecAttendance));
  // app.use("/api-docs/Department",  swaggerUi.setup(swaggerSpecDepartment));
  // app.use("/api-docs/Employee",  swaggerUi.setup(swaggerSpecemp));
  // app.use("/api-docs/Holidays",  swaggerUi.setup(swaggerSpecholidays));
  // app.use("/api-docs/Leave",  swaggerUi.setup(swaggerSpecleaves));
  // app.use("/api-docs/Notification",  swaggerUi.setup(swaggerSpecNotification));
  // app.use("/api-docs/Projects",  swaggerUi.setup(swaggerSpecProjects));
  // app.use("/api-docs/Team",  swaggerUi.setup(swaggerSpecTeam));
  // app.use("/api-docs/signin", swaggerUi.setup(swaggerSpecuser));
  // app.use("/api-docs/Visiting",  swaggerUi.setup(swaggerSpecAtVisiting));
  // app.use("/api-docs/branch", swaggerUi.setup(swaggerSpecAtbranch));

  // app.use("/api-docs/branch", swaggerUi.serve, swaggerUi.setup(swaggerSpecAtbranch));
};

module.exports = swaggerDocs;
