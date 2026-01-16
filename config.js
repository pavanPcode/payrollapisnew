module.exports = {
    PORT: process.env.PORT || 3000,
    JWT_SECRET : "ROLLCALL",
    // Database Configurations for Multiple Databases
    DB_CONFIGS: {
      rcprimedb: {
        user: 'pc1dbuser',
        password: 'p4r4nni@l',
        server: 'sql5050.site4now.net',
        database: 'DB_A50D85_RCPrime',
        options: {
          encrypt: false,
          trustServerCertificate: true
        }
      },
      rclitedb: {
        user: 'sa',
        password: 'sadguru',
        server: 'URI\\SQLEXPRESS',
        database: 'DB_A50D85_RollCallLite',
        options: {
          encrypt: false,
          trustServerCertificate: true
        }
      },
      rcstddb: {
        user: 'sa',
        password: 'sadguru',
        server: 'URI\\SQLEXPRESS',
        database: 'DB_A50D85_RcSTd',
        options: {
          encrypt: false, // Set to true if using Azure
          enableArithAbort: true,
        },
        driver: 'tedious',
      },
      rcpremiumdb: {
        // user: 'sa',
        // password: 'sadguru',
        // server: 'URI\\SQLEXPRESS', // Change to .\SQLEXPRESS if needed
        // database: 'DB_A50D85_RCPayroll',
        user: 'db_a99f12_qarcpayroll_admin',
        password: 'q@rcp@yr0ll',
        server: 'sql8002.site4now.net', // Change to .\SQLEXPRESS if needed
        database: 'db_a99f12_qarcpayroll',
        options: {
          encrypt: false, // Set to true if using Azure
          enableArithAbort: true,
        },
        driver: 'tedious',
      },    
      logdb: {
        user: 'sa',
        password: '',
        server: 'URI\\SQLEXPRESS',
        database: 'RCLog',
        options: {
          encrypt: true, 
          trustServerCertificate: true, 
        },
      },
      // Add more databases as needed
    },
  };
  