const express = require('express');
const router = express.Router();
const { DbDataByOperationId,DbDataByOperationId_no_Res } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');
// const {  upload } = require('../fileupload')

const multer = require('multer');
const path = require('path');
const mime = require('mime-types');
//const mimeType = mime.lookup(filePath); // ✅ this works with mime-types
const fs = require('fs');
const os = require('os');
const ftp = require('basic-ftp');

const upload = multer({ dest: 'uploads/' });



const FTP_HOST = '50.63.8.82';
const FTP_PORT = 21;
const FTP_USER = 'fileupld';
const FTP_PASSWORD = '45sFn37~x';
const FTP_FOLDER = 'Bomitems'; // Cloud folder to store images

async function connectFTP() {
    const client = new ftp.Client();
    await client.access({
        host: FTP_HOST,
        port: FTP_PORT,
        user: FTP_USER,
        password: FTP_PASSWORD,
        secure: false,
    });
    client.trackProgress((info) => {
        console.log(`Transferred: ${info.bytes} bytes`);
    });
    return client;
}



// // ⬇️ upload to /ecommerce/images/<userId>/<productId>/<filename>
// async function uploadFileToFTPCloud(localFilePath, createdby, bomidoritemid, itemnameorbomname, remoteFileName) {
//     const client = new ftp.Client();
//     client.ftp.verbose = false;

//     try {
//       await client.access({
//         host: FTP_HOST,
//         port: FTP_PORT,
//         user: FTP_USER,
//         password: FTP_PASSWORD,
//         secure: false,
//       });

//       const remoteDir = `/Bomfiles/${createdby}/${bomidoritemid}/${itemnameorbomname}`;

//       // Split folder path and ensure all exist (like mkdir -p)
//       const folders = remoteDir.split('/');
//       for (let i = 0; i < folders.length; i++) {
//         const pathSoFar = folders.slice(0, i + 1).join('/');
//         try {
//           await client.ensureDir(pathSoFar);
//         } catch (err) {
//           console.error(`Error ensuring directory ${pathSoFar}:`, err.message);
//         }
//       }

//       // Upload file
//       await client.uploadFrom(localFilePath, `${remoteDir}/${remoteFileName}`);

//       // ✅ Return HTTP URL
//       return `${remoteDir}/${remoteFileName}`;
//     } catch (err) {
//       console.error('FTP Upload Error:', err);
//       throw err;
//     } finally {
//       client.close();
//     }
//   }



// Helper function to directly return an integer for file types
function getFileType(mimeType) {
    const mimeMap = {
        'image/jpeg': 1,
        'image/png': 2,
        'application/pdf': 3,
        'text/plain': 4,
        'application/json': 5,
        'application/zip': 6
        // Add more mappings as needed
    };
    return mimeMap[mimeType] || 0; // Return mapped integer or default to 0
}






async function uploadFileToFTPCloud(localFilePath, superid, regid, remoteFileName) {
    const client = new ftp.Client();
    client.ftp.verbose = false;

    try {
        await client.access({
            host: FTP_HOST,
            port: FTP_PORT,
            user: FTP_USER,
            password: FTP_PASSWORD,
            secure: false,
        });

        const remoteDir = `/rollcallempfiles/${superid}/${regid}`;

        // Ensure all directories exist
        const folders = remoteDir.split('/');
        for (let i = 0; i < folders.length; i++) {
            const pathSoFar = folders.slice(0, i + 1).join('/');
            try {
                await client.ensureDir(pathSoFar);
            } catch (err) {
                console.error(`Error ensuring directory ${pathSoFar}:`, err.message);
            }
        }

        // Upload file
        await client.uploadFrom(localFilePath, `${remoteDir}/${remoteFileName}`);

        // Extract file type and typename
       // const mimeType  = mime.lookup(localFilePath) || 'unknown'; // Determine MIME type
        const typename = path.extname(remoteFileName).substring(1); // Extract file extension
           // Ensure fileType returns an integer (not a Promise)
        //const fileType = getFileType(mimeType); // Now fileType is a direct integer
         // console.log(fileType)

        // ✅ Return file details
        return {
            filePath: `${remoteDir}/${remoteFileName}`,
            // fileType,
            typename
        };
    } catch (err) {
        console.error('FTP Upload Error:', err);
        throw err;
    } finally {
        client.close();
    }
}







router.post('/UploadEmpImages', validateToken, upload.array('files',6), async (req, res, next) => {

        const files = req.files;
        console.log(files)

   if (!req.files || req.files.length === 0) {
    return utilityhandleResponse(res, false, "Missing required parameters: Userid or Image files.", 400);
}
    const { superid, regid, fileType } = req.body;
    if (!superid || !regid || !fileType) {
        return utilityhandleResponse(res, false, "Missing required parameters: superid regid and Type" , 400);
    }

     // Convert `req.files.file` to an array if it's a single file
     //const files = Array.isArray(req.files.files) ? req.files.files : [req.files.files];

     // Limit to a maximum of 6 files
     if (files.length > 6) {
        return utilityhandleResponse(res, false, "you cant upload more than 6 images" , 400);
     }
 
     const uploadedFiles = [];
     const errors = [];
      const userObj = req.user;


     for (const file of files) {
        try {
            console.log(file, superid, regid)
            const result = await uploadFileToFTPCloud(file.path, superid, regid, file.originalname);
            // console.log(result,'path')
            uploadedFiles.push(result.path); // Assuming `uploadFileToFTPfun` returns the file path

           const data = {
                superid: superid,
                regid: regid,
                filePath: result.filePath.replace(/'/g, "''"),
                //fileType: result.fileType,
                fileType: fileType,
                typename: result.typename.replace(/'/g, "''"),
            }
            console.log(data, 'data')
            // saveindb = handleRecord(req, res, data, OperationEnums().ListImagPaths);
            await DbDataByOperationId_no_Res(data, userObj, OperationEnums().uploadempFiles);
        }
        catch (error) {
            errors.push({ error: error.message });
        }
    }
        if (uploadedFiles.length > 0) {
            return utilityhandleResponse(res, true, 'Query executed successfully.' , 200);
    } 
});




router.get('/empfilepaths', validateToken, async (req, res, next) => {
    const Data = req.query;
    const userObj = req.user;
    const reobj={
        superid:Data.superid,
        regid:Data.regid,
    }
    console.log(Data)
    return DbDataByOperationId(reobj, userObj, res, OperationEnums().getempfilepaths);
});



router.get('/empfiledownload', async (req, res) => {
    const remotePath = req.query.path;
    console.log(remotePath)
    if (!remotePath) {
        return utilityhandleResponse(res, false, "file path is required" , 400);

    }
  
    try {
      const client = await connectFTP();
      const tempFilePath = path.join(os.tmpdir(), path.basename(remotePath));
      await client.downloadTo(tempFilePath, remotePath);
      client.close();
  
      res.download(tempFilePath, path.basename(remotePath), (err) => {
        if (!err) fs.unlinkSync(tempFilePath);
      });
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
    }
  });

  router.get('/empfilesdelete', validateToken, async (req, res, next) => {
    const Data = req.query;
    const userObj = req.user;
    const reobj={
        superid:Data.superid,
        regid:Data.regid,
        ImageId: Data.ImageId,
    }
    console.log(Data)
    return DbDataByOperationId(reobj, userObj, res, OperationEnums().getempfilesdelete);
});















module.exports = router;