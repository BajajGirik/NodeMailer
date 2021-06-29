import dotenv from "dotenv";
import e from "express";
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
        await transporter.sendMail({
            from: process.env.EMAIL_ACCOUNT,
            to: to,
            subject: "Test Mail",
            text: `Hello there!, ${to}`,

        }, (err, res) => {
            if (err) {
                console.log(err);
            }

            else {
                console.log(res);
            }
        });
    }

    catch(err) {
        console.log(err);
    }
};

export default sendemail;
