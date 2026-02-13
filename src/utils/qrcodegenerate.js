const path = require('path');
const fs = require('fs');
const QRCode = require('qrcode');

async function generateQRCode(passCode) {
    try {
        if (!/^\d{8}$/.test(passCode)) {
            throw new Error('PassCode must be exactly 8 digits');
        }

        const folderPath = path.join(__dirname, 'qrcodes');

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const fileName = `${passCode}.png`;
        console.log('fileName',fileName)
        const filePath = path.join(folderPath, fileName);

        await QRCode.toFile(filePath, passCode, {
            width: 300,
            margin: 2
        });

        return {
            fileName,
            filePath
        };

    } catch (error) {
        throw error;
    }
}

module.exports = {
    generateQRCode,
};


// Example usage
// generateQRCode("12345678");