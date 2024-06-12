const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

const sendRegistrationEmail = (registrationData) => {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: registrationData.email,
        subject: 'Registration Confirmation',
        text: `Dear ${registrationData.firstname},\n\nThank you for registering. We have received your details.\n\nHere are your interview details:\nDate: ${registrationData.interviewDate}\nTime: ${registrationData.timeSlot}\n\nBest regards,\nYour Company`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
};

module.exports = sendRegistrationEmail;
