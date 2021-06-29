import nodemailer from "nodemailer";

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
        const sent = await transporter.sendMail({
            from: process.env.EMAIL_ACCOUNT,
            to: to,
            subject: "Test Mail",
            text: `Hello there!, ${to}`,

        }, (error, res) => {
            if(error)
                console.log("Error: ",error);
            else
                console.log("Mail Sent", res);
        });
    }

    catch(err) {
        console.log(err);
    }
};

export default sendemail;
