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

        // 🔹 If uploading to cloud/server
        const superId = Data.SuperId;
        const type = 'visitor';
        const product = 'payroll';

        // OPTIONAL: if you want to upload QR file
        
        const uploadResult = await uploadFileToServerQrcode({
            filePath: qrData.filePath,
            superId: Data.SuperId,
            type: 'visitor',
            product: 'payroll'
        });

        // Data.Attachment = uploadResult.fileUrl;
        Data.Attachment = `${product}/${superId}/${type}/${qrData.fileName}`;
        Data.autoapproval = 1

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

router.get('/getvisitorsList', validateToken, async (req, res, next) => {
    const { SuperId, HostedBy, status, VisitType,StartDate,EndDate } = req.query;

    const requestObj = {
        SuperId: SuperId,
        HostedBy: HostedBy || 0,
        status: status || 0,
        VisitType: VisitType || 0,
        StartDate: StartDate || 0,
        EndDate: EndDate || 0,filegetdomain : filegetdomain,
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