const nodemailer = require('nodemailer');
require('dotenv').config();
const { EMAIL_USER, EMAIL_CLIENTID, EMAIL_CLIENTSECRET, EMAIL_REFRESHTOKEN, EMAIL_ACCESSTOKEN } = process.env;

module.exports = (details)=> {

    // Generate test SMTP service account from ethereal.email
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            type: 'OAuth2',
            user: EMAIL_USER,
            clientId: EMAIL_CLIENTID,
            clientSecret: EMAIL_CLIENTSECRET,
            refreshToken: EMAIL_REFRESHTOKEN,
            accessToken: EMAIL_ACCESSTOKEN,
            expires: 1484314697598
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Kotchaparn Wongkor"kotchaparn.w@gmail.com', // sender address
        to: `${details.email}`, // list of receivers
        subject: 'Thank you for submitting form', // Subject line
        text: 'Hello world?', // plain text body
        html: `<b>Dear ${details.name} </b>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(info);
    });
}