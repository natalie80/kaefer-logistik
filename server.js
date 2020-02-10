'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const PORT =  process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, 'logistik-app/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:  false}));

app.get('/api',  (req, res) => {
    const customers = [
        {id: 1, firstName: 'Kaefer', lastName: 'Angelika'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];
    res.json(customers);
    console.log('sent request', res);
});


app.post('/send_email', (req, res) => {


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
                user: 'lon.bednar@ethereal.email',
                pass: 'AgK7q6XfZUHfyXUrVy'
            },
            tls: {
                rejectUnauthorized: false
            }
        };
    }

    console.log('==Request==',req.body);

    console.log('=== Mail info request ====', req.body);
    console.log('=== My email:  ', req.body.formData.email);
    console.log('=== My name:  ', req.body.formData.name);

    console.log('=== MailConfig ===  ', mailConfig);


     const name = req.body.formData.name,
     email = req.body.formData.email,
     subject = req.body.formData.subject,
     phone = req.body.formData.phone,
     gender = req.body.formData.gender,
     message = req.body.formData.message,
     content = ` Geschlecht: ${gender} \n Name: ${name} \n Telefonenummer: ${phone}  \n Email: ${email} \n Message: ${message} `;


   /** const email = 'natalie@web.de',
        name = 'Natalie',
        subject = 'Kleine Test',
        phone = '123456789',
        message = 'Hallo hier sende ich eine Message',
        content = ` Name: ${name} \n Telefonenummer: ${phone}  \n Email: ${email} \n Message: ${message} `; **/


   const mailOptions = {
        from: email,
        to: 'natalikaefer@hotmail.de',
        subject: `New Message from Contact Form' \n ${subject} `,
        text: content
   };

    let transporter = nodemailer.createTransport( mailConfig);
    console.log('== mailOptions ==  ',mailOptions);

    transporter.sendMail(mailOptions, (error, info) => {
        console.log('Preview URL: %s',nodemailer.getTestMessageUrl(info));
        console.log('== sendmail ERROR ==  ', error);
        res.render('logistik-app mail wurde versendet');

        //res.send('Success');

    });
});



app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
