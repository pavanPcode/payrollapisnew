const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');
const { Console } = require('winston/lib/winston/transports');
const { filegetdomain,fileuploaddomain,uploadFileToServerQrcode } = require('../utils/Fileuploads');
const { generateQRCode } = require('../utils/qrcodegenerate');

router.post('/UpdatevisitorStatus',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().updatestatusVis);
});

router.post('/deletevisitor',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;

    return DbDataByOperationId(Data,userObj, res, OperationEnums().deletevisitorzk);
});

router.post('/editvisitor',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;

    return DbDataByOperationId(Data,userObj, res, OperationEnums().editvisitorzk);
});


// async function generateQRCode(passCode) {
//     try {
//         if (!/^\d{8}$/.test(passCode)) {
//             throw new Error('PassCode must be exactly 8 digits');
//         }

//         const folderPath = path.join(__dirname, 'qrcodes');

//         if (!fs.existsSync(folderPath)) {
//             fs.mkdirSync(folderPath, { recursive: true });
//         }

//         const fileName = `${passCode}.png`;
//         const filePath = path.join(folderPath, fileName);

//         await QRCode.toFile(filePath, passCode, {
//             width: 300,
//             margin: 2
//         });

//         return {
//             fileName,
//             filePath
//         };

//     } catch (error) {
//         throw error;
//     }
// }

router.post('/Addvisitor', validateToken, async (req, res, next) => {
    try {

        const Data = req.body;
        const userObj = req.user;

        // 🔹 Generate 8-digit PassCode
        const generatePassCode = () => {
            return Math.floor(10000000 + Math.random() * 90000000).toString();
        };

        const passCode = generatePassCode();
        Data.PassCode = passCode;

        // 🔹 Generate QR using PassCode
        const qrData = await generateQRCode(passCode);

        console.log('QR File Name:', qrData.fileName);
        console.log('QR File Path:', qrData.filePath);

        // 🔹 If uploading to cloud/server
        const superId = Data.SuperId;
        const type = 'visitor';
        const product = 'payroll';

        // OPTIONAL: if you want to upload QR file
        
        // const qrData = await generateQRCode(passCode);

        const uploadResult = await uploadFileToServerQrcode({
            filePath: qrData.filePath,
            superId: Data.SuperId,
            type: 'visitor',
            product: 'payroll'
        });

        // Data.Attachment = uploadResult.fileUrl;
        Data.Attachment = `${product}/${superId}/${type}/${qrData.fileName}`;

        // 🔹 Save relative path in DB
        // Data.Attachment = `qrcodes/${qrData.fileName}`;
        console.log('data',Data)
        return DbDataByOperationId(
            Data,
            userObj,
            res,
            OperationEnums().addvisitorzk
        );

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
});

// router.post('/Addvisitor',validateToken, async (req, res, next) => {
//     const Data = req.body;
//     const userObj = req.user;

//     const generatePassCode = () => {
//         return Math.floor(10000000 + Math.random() * 90000000).toString();
//     };

//     Data.PassCode = generatePassCode();


//     const originalName =  generateQRCode("12345678");

//     console.log('File Name:', fileName);
//     console.log('Original Name:', originalName);
//     const superId = Data.SuperId;
//     const type = 'Vendor';
//     const product = 'payroll';


//     // 🔹 Call file upload function
//     if (file) {
//         await uploadFileToServer({
//           file,
//           superId,
//           type,
//           product
//         });
//       }
//     Data.Attachment = `${product}/${superId}/${type}/${originalName}`;

//     return DbDataByOperationId(Data,userObj, res, OperationEnums().addvisitorzk);
// });

// router.post('/deleteAdvancePayments',validateToken, async (req, res, next) => {
//     const Data = req.body;
//     const userObj = req.user;
//     return DbDataByOperationId(Data,userObj, res, OperationEnums().deleteAdvancePayments);
// });
router.get('/getvisitorsList', validateToken, async (req, res, next) => {
    const { SuperId, HostedBy, status, VisitType,StartDate,EndDate } = req.query;

    const requestObj = {
        SuperId: SuperId,
        HostedBy: HostedBy || 0,
        status: status || 0,
        VisitType: VisitType || 0,
        StartDate: StartDate || 0,
        EndDate: EndDate || 0
    };
    console.log('requestObj',requestObj)
    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getvisitors
    );
});





module.exports = router;