const nodemailer = require("nodemailer");

// const mailSender = async (email, title, body) => {
//     try{
//             let transporter = nodemailer.createTransport({
//                 host:process.env.MAIL_HOST,
//                 port: 587,
//                 secure: false,
//                 auth:{
//                     user: process.env.MAIL_USER,
//                     pass: process.env.MAIL_PASS,
//                 }
//             })


//             let info = await transporter.sendMail({
//                 from: `StudyNotion  ${process.env.MAIL_USER}`,
//                 to:`${email}`,
//                 subject: `${title}`,
//                 html: `${body}`,
//             })
//             console.log(info);
//             return info;
//     }
//     catch(error) {
//         console.log(error.message);
//     }
// }


// module.exports = mailSender;
// const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",               // FIXED
            port: 465,                            // FIXED (Most stable for Gmail)
            secure: true,                         // FIXED
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,      // MUST be Gmail App Password
            },
            pool: false,                          // FIXED (Render issue)
            connectionTimeout: 10000,             // Prevents timeout freeze
            greetingTimeout: 10000,
            socketTimeout: 10000
        });

        let info = await transporter.sendMail({
            from: `StudyNotion <${process.env.MAIL_USER}>`,  // FIXED syntax
            to: email,
            subject: title,
            html: body,
        });

        console.log("MAIL SENT:", info.messageId);
        return info;
    } catch (error) {
        console.log("MAIL ERROR:", error);
        return null;
    }
};

module.exports = mailSender;

