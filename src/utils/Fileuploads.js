
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


module.exports = {
    filegetdomain,fileuploaddomain,uploadFileToServer
};
