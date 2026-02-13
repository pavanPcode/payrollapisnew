const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

async function generateQRCode(eightDigitNumber) {
    try {
        // Validate 8-digit input
        if (!/^\d{8}$/.test(eightDigitNumber)) {
            throw new Error('Input must be exactly 8 digits');
        }

        const folderPath = path.join(__dirname, 'qrcodes');

        // Create folder if not exists
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        const filePath = path.join(folderPath, `${eightDigitNumber}.png`);

        // Generate QR and save
        await QRCode.toFile(filePath, eightDigitNumber, {
            width: 300,
            margin: 2
        });

        console.log('QR Code saved at:', filePath);
        return filePath;

    } catch (error) {
        console.error('Error generating QR:', error.message);
    }
}

// Example usage
generateQRCode("12345678");