const express = require('express');
const router = express.Router();
const { DbDataByOperationId,DbDataByOperationId_no_Res } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');
// const { RequestError } = require('mssql');
const { sendEmail } = require("../utils/mailsUtil");


router.post('/addqueuemail',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        // console.log(Data,'userObj',userObj)
        return DbDataByOperationId(Data, userObj, res, OperationEnums().addqueuemail);
    });

router.get('/bulkemail',validateToken, async (req, res, next) => {
    try {
    const { reccnt } = req.query;
    const mailResponse = [];
    const EmailQueueTblIds = [];
    if (!reccnt) {
        return utilityhandleResponse(res, false, "Missing required parameters: reccnt." , 400);
    }
    // Create the request data object
    const requestObj = {
        reccnt: reccnt
    };
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    // result =  DbDataByOperationId(requestObj,userObj, res, OperationEnums().bulkemail);
    lastResult = await DbDataByOperationId_no_Res(requestObj, userObj, OperationEnums().bulkemail);
    // console.log(lastResult)


    if (lastResult.ResultData && Array.isArray(lastResult.ResultData)) {
        for (const record of lastResult.ResultData) {
            const emailObj = {
                Id:record.Id,
                frommail: record.FromAddress,
                password: record.Password,
                emailserver: record.HostName,
                port: 587,  // Or get from record if dynamic
                subject: record.Subject,
                message: record.Message,
                tomail: record.ToAddress,
                cc: record.ccemail || '',
                bcc: '', // Add if needed
            };

            const result = await sendEmail(emailObj, null, record.DisplayName || 'Pereco');
            // console.log(`Email to ${record.ToAddress} =>`, result);

            const requestObj = {
                id: record.Id,
                status: result.status,
                message: result.message,
            };
            mailResponse.push(requestObj);
    
            if (result.status) {
                up_suu = {
                    EmailQueue:record.Id,
                    IsProcessed:1,
                    ResponseCode:200,
                    ResponseMsg:result.message
                }
                // await updatequeueresponse( record.Id, 1, 200, result.message);
                await DbDataByOperationId_no_Res(up_suu, userObj, OperationEnums().UPbulkemail);
                EmailQueueTblIds.push(record.Id); // ✅ Save successful ID
            } else {
                fa_suu = {
                    EmailQueue:record.Id,
                    IsProcessed:0,
                    ResponseCode:500,
                    ResponseMsg:result.message
                }
                // await updatequeueresponse('pcdbconn', record.Id, 'IsProcessed', 500, result.message);
                await DbDataByOperationId_no_Res(fa_suu, userObj, OperationEnums().UPbulkemail);
            }
        }
    }

    return res.status(200).json(mailResponse);
} catch (error) {
    console.log(error)
    // next(error); // Pass error to Express error handler
    return utilityhandleResponse(res, false, error , 500);
}
});



module.exports = router;