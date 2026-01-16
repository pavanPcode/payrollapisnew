const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const os = require('os');

async function sendEmail(emailObj, attachments = null, DisplayName = null) {
    try {
        const transporter = nodemailer.createTransport({
            host: emailObj.emailserver,
            port: emailObj.port,
            secure: false,
            auth: {
                user: emailObj.frommail,
                pass: emailObj.password
            }
        });

        const mailOptions = {
            from: DisplayName ? `"${DisplayName}" <${emailObj.frommail}>` : emailObj.frommail,
            to: emailObj.tomail,
            subject: emailObj.subject,
            html: emailObj.message,
            cc: emailObj.cc || undefined,
            bcc: emailObj.bcc || undefined,
            attachments: []
        };

        if (attachments && attachments.length > 0) {
            for (const file of attachments) {
                const tempDir = path.join(os.tmpdir());
                const tempPath = path.join(tempDir, file.originalname);
                
                // Save buffer to temporary file
                fs.writeFileSync(tempPath, file.buffer);

                mailOptions.attachments.push({
                    filename: file.originalname,
                    path: tempPath
                });
            }
        }

        await transporter.sendMail(mailOptions);

        // Delete temporary files after sending
        if (attachments && attachments.length > 0) {
            for (const file of attachments) {
                const tempPath = path.join(os.tmpdir(), file.originalname);
                fs.unlinkSync(tempPath);
            }
        }

        return { status: true, message: 'send_email success' };
    } catch (err) {
        return { status: false, message: `send_email error: ${err.message}` };
    }
}

module.exports = {
    sendEmail
};

// // Sample emailObj
// const emailObj = {
//     frommail: "codeperennial@gmail.com",
//     password: "qdombajmvepbqnfg",
//     emailserver: "smtp.gmail.com",
//     port: 587,
//     tomail: "pavan@perennialcode.in",
//     subject: "Test Email",
//     message: "<h1>Hello</h1><p>This is a test email.</p>",
//     cc: "",
//     bcc: ""
// };

// Sample file (buffer from multer or similar)
// const attachments = [
//     {
//         originalname: "test.txt",
//         buffer: Buffer.from("Sample file content")
//     }
// ];

// Call the function
// sendEmail(emailObj,attachments = null,DisplayName =  "pavan").then(console.log);
