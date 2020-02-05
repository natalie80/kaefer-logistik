'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const http = require('http');
const cors = require('cors');
const router = express.Router();
const app = express();
const PORT =  process.env.PORT || 3001;

app.use(express.static('/logistik-app/build'));


// Body Parser Middleware
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));

//const server = http.createServer(app);

app.get('/api',  (req, res) => {

    // res.send(' EXPRESS BACKEND ');
   // res.sendFile(path.join(__dirname, '/index.html'));

    const customers = [
        {id: 1, firstName: 'Kaefer', lastName: 'Angelika'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];

    res.json(customers);

    console.log('sent request', res);
});


/**
let mailConfig;
if (process.env.NODE_ENV === 'production' ) {
    mailConfig = {
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
            user: 'natalikaefer@hotmail.de',
            pass: 'adem1301'
        }
    };

    } else {
        mailConfig = {
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'maida.dickinson78@ethereal.email',
                pass: 'Meb1DryAnccrKQJ6WD'
            },
            tls: {
                rejectUnauthorized: false
            }
        };
    }

app.get("/", function (req, res) {
    res.render("index");
});


app.post('/api/send_email', (req, res, next) => {
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
        to: 'natalikaefer@hotmail.de',
        subject: `New Message from Contact Form' \n ${subject} `,
        text: content
    };

    let transporter = nodemailer.createTransport("SMTP", mailConfig);

    transporter.verify((error, success) => {
        if (error) {
            console.log('ERROR: ',error.message);
        } else {
            console.log('Server is ready to take messages');
        }
    });

    transporter.sendMail(mailOptions, (error, data) => {
        console.log('Message sent: %s',data.messageId);
        console.log('Preview URL: %s',nodemailer.getTestMessageUrl(data));
         res.render('logistik-app', {msg: 'Email wurde gesendet'});

        res.send('Success');

    });
});
**/



app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
