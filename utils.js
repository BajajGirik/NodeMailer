import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

const sendemail = async (to) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: process.env.EMAIL_ACCOUNT,
            pass: process.env.EMAIL_PASS,
        }
    });

    try {
        const error, sent = await transporter.sendMail({
            from: process.env.EMAIL_ACCOUNT,
            to: to,
            subject: "Test Mail",
            text: `Hello there!, ${to}`,

        });

        if(error){
            console.log(error);
            return false;
        }
        else {
            console.log(sent);
            return sent;
        }
    }

    catch(err) {
        console.log(err);
    }
    return false;
};

export default sendemail;
