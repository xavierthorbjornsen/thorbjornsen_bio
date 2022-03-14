const functions = require("firebase-functions");
const nodemailer = require('nodemailer');

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});

const cors = require("cors")({
    origin: true
});

exports.emailMessage = functions.https.onRequest(async(req, res) => {
    cors(req, res, () => {
        if (req.method !== 'POST') {
            return;
        };
    
        const mailOptions = {
            to: gmailEmail,
            from: req.body.email,
            subject: `from my website ${req.body.email}`,
            text: req.body.message,
            html: `<p>${req.body.message}`
        };

        try {
            mailTransport.sendMail(mailOptions);
            functions.logger.log(
                `New email from ${req.body.email}`,
            );
        } catch (error) {
            functions.logger.error(
                'There was an error while sending the email:',
                error
            );

        }
        res.status(200).end();

    });
});

