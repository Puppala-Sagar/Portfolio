const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password'
    }
});

// Serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/your-html-file.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { fullName, emailAddress, mobileNumber, emailSubject, message } = req.body;

    // Send email to a specific email address (e.g., sagarpuppala123@gmail.com)
    const mailOptions = {
        from: emailAddress,
        to: 'sagarpuppala123@gmail.com',
        subject: emailSubject || 'New Form Submission',
        text: `Name: ${fullName}\nEmail: ${emailAddress}\nMobile: ${mobileNumber}\nSubject: ${emailSubject}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error sending email.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Form submitted and email sent.');
        }
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
