'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const PORT =  process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'logistik-app/build')));

app.get('/api',  (req, res) => {

    const customers = [
        {id: 1, firstName: 'Kaefer', lastName: 'Angelika'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];

    res.json(customers);

    console.log('sent request', res);
});


let mailConfig;
if (process.env.NODE_ENV === 'production' ) {
    mailConfig = {
        host: 'ssh.natalie-kaefer.de',
        port: 465,
        secure: true,
        auth: {
            user: 'natalie-kaefer.de',
            pass: 'nkl!0407'
        },
        tls: {
            rejectUnauthorized: false
        }
    };

} else {
    mailConfig = {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'annabelle.rutherford@ethereal.email',
            pass: 'uBxmH9kHHkj8Jna7WW'
        },
        tls: {
            rejectUnauthorized: false
        }
    };
}

app.post('/send_email', (req, res) => {
    //res.header("Access-Control-Allow-Origin", "*");

  // console.log('Mail info response:', res);

    console.log('=== Mail info request ====', req);

   /** const name = req.body.formData.name,
        email = req.body.formData.email,
        subject = req.body.formData.subject,
        phone = req.body.formData.phone,
        gender = req.body.formData.gender,
        message = req.body.formData.message,
        content = ` Geschlecht: ${gender} \n Name: ${name} \n Telefonenummer: ${phone}  \n Email: ${email} \n Message: ${message} `; **/


   const email = 'natalie@web.de',
       name = 'Natalie',
       subject = 'Kleine Test',
       phone = '123456789',
       message = 'Hallo hier sende ich eine Message',
       content = ` Name: ${name} \n Telefonenummer: ${phone}  \n Email: ${email} \n Message: ${message} `;


    const mailOptions = {
        from: email,
        to: 'natalikaefer@hotmail.de',
        subject: `New Message from Contact Form' \n ${subject} `,
        text: content
    };

    let transporter = nodemailer.createTransport( mailConfig);

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



app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
