const fs = require('fs');
const FormData = require('form-data');
const axios = require('axios');



const fileuploaddomain = 'https://pcuploadfiles.azurewebsites.net'
const filegetdomain = 'https://pcuploadfiles.azurewebsites.net/download?path='

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

async function uploadFileToServerQrcode({ filePath, file, superId, type, product }) {
  try {

    const formData = new FormData();

    // ✅ If QR generated locally (filePath provided)
    if (filePath) {
      const fileName = filePath.split('\\').pop(); // Windows safe
      formData.append('file', fs.createReadStream(filePath), fileName);
    }

    // ✅ If multer file (buffer) provided
    if (file) {
      formData.append('file', file.buffer, file.originalname);
    }

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

    // ✅ Build downloadable URL
    const uploadedPath = response.data?.path; // depends on your API response

    const fileUrl = `${filegetdomain}${uploadedPath}`;

    return {
      uploadResponse: response.data,
      fileUrl 
    };

  } catch (error) {
    console.error('File upload failed:', error.message);
    throw error;
  }
}

module.exports = {
    filegetdomain,fileuploaddomain,uploadFileToServer,uploadFileToServerQrcode
};
