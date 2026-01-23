const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const fileuploaddomain = 'https://pcuploadfiles.azurewebsites.net/download?path='
async function uploadFileToServer({ file, superId, type, product }) {
  try {
    const formData = new FormData();

    // ✅ Use buffer instead of path
    formData.append('file', file.buffer, file.originalname);
    formData.append('superid', superId);
    formData.append('type', type);
    formData.append('product', product);

    const response = await axios.post(
      `${fileuploaddomain}/upload`,
      formData,
      {
        headers: formData.getHeaders(),
      }
    );

    return response.data;
  } catch (error) {
    console.error('File upload failed:', error.message);
    throw error;
  }
}


router.post('/addVendorExpenses',validateToken,upload.single('Attachment'), async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    console.log('Data',Data)

        // Uploaded file info
    const file = req.file;
    const fileName = file ? file.filename : null;        // stored file name
    const originalName = file ? file.originalname : null; // original file name

    console.log('File Name:', fileName);
    console.log('Original Name:', originalName);
    const superId = Data.SuperId;
    const type = 'Vendor';
    const product = 'payroll';


    // 🔹 Call file upload function
    if (file) {
        await uploadFileToServer({
          file,
          superId,
          type,
          product
        });
      }
    Data.Attachment = `${product}/${type}/${superId}/${originalName}`;

    console.log('Data',Data)

    return DbDataByOperationId(Data,userObj, res, OperationEnums().addVendorExp);
});

router.post('/deleteVendorExpenses',validateToken,upload.none(), async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    console.log('Data',Data)
    return DbDataByOperationId(Data,userObj, res, OperationEnums().deleteVendorExpenses);
});

router.post('/ApproveVendorExpenses',validateToken,upload.none(), async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    console.log('Data',Data)
    return DbDataByOperationId(Data,userObj, res, OperationEnums().ApproveVendorExpenses);
});

router.get('/getVendorExpenses', validateToken, async (req, res, next) => {
    const { SuperId } = req.query;

    if (!SuperId ) {
        return res.status(400).json({ message: 'SuperId  are required' });
    }
    const requestObj = {SuperId:SuperId,
        SuperId:SuperId ,
        fileuploaddomain:fileuploaddomain
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getVendorExp
    );
});


router.post('/addRegExpenses',validateToken,upload.single('Attachment'), async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    console.log('Data',Data)

        // Uploaded file info
    const file = req.file;
    const fileName = file ? file.filename : null;        // stored file name
    const originalName = file ? file.originalname : null; // original file name

    console.log('File Name:', fileName);
    console.log('Original Name:', originalName);
    const superId = Data.SuperId;
    const type = 'expences';
    const product = 'payroll';


    // 🔹 Call file upload function
    if (file) {
        await uploadFileToServer({
          file,
          superId,
          type,
          product
        });
      }
    Data.Attachment = `${product}/${type}/${superId}/${originalName}`;

    console.log('Data',Data)

    return DbDataByOperationId(Data,userObj, res, OperationEnums().addRegExpenses);
});

router.post('/deleteRegExpenses',validateToken,upload.none(), async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    console.log('Data',Data)
    return DbDataByOperationId(Data,userObj, res, OperationEnums().deleteRegExpenses);
});

router.post('/ApproveRegExpenses',validateToken,upload.none(), async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    console.log('Data',Data)
    return DbDataByOperationId(Data,userObj, res, OperationEnums().ApproveRegExpenses);
});

router.get('/getRegExpenses', validateToken, async (req, res, next) => {
    const { SuperId,RegId,BranchId,PayPeriodId } = req.query;

    if (!SuperId || !RegId) {
        return res.status(400).json({ message: 'SuperId and RegId and BranchId and PayPeriodId are required' });
    }
    const requestObj = {SuperId:SuperId,
        RegId:RegId || 0,
        BranchId:BranchId  || 0,
        PayPeriodId:PayPeriodId || 0,
        fileuploaddomain:fileuploaddomain
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getRegExpensespr
    );
});



module.exports = router;