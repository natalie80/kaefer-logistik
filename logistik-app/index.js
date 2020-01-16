const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
const router = express.Router();

const app = express();

// Static folder
app.use(express.static(path.join(__dirname, 'build')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


let mailConfig;

    mailConfig = {
        host: '2a02:2350:5:107:fc80:0:8414:7a4e46.30.215.242',
        port: 465,
        secure: true,
        auth: {
            user: 'info@natalie-kaefer.de',
            pass: 'nkl!0407'
        }
    };


app.post('/api/send_email', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    console.log('Mail info:', req.body);

    const name = req.body.formData.name,
          email = req.body.formData.email,
          subject = req.body.formData.subject,
          phone = req.body.formData.phone,
          gender = req.body.formData.gender,
          message = req.body.formData.message,
          content = ` Geschlecht: ${gender} \n Name: ${name} \n Telefonenummer: ${phone}  \n Email: ${email} \n Message: ${message} `;

    const mailOptions = {
        from: email,
        to: 'info@natalie-kaefer.de',
        subject: `New Message from Contact Form' \n ${subject} `,
        text: content
    };

    let transporter = nodemailer.createTransport(mailConfig);

    transporter.verify((error, success) => {
        if (error) {
            console.log('ERROR',error);
        } else {
            console.log('Server is ready to take messages');
        }
    });

    transporter.sendMail(mailOptions, (error, data) => {
        if (error) {
            res.json({
                status: 'fail'
            });
            return console.log(error);
        } else {
            console.log('Message sent: %s',data.messageId);
            console.log('Preview URL: %s',nodemailer.getTestMessageUrl(data));
             res.render('logistik-app', {msg: 'Email wurde gesendet'});

            res.json({
                status: 'success'
            })
        }
    }, function(error, response) {

        //transporter.close();
    });
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});