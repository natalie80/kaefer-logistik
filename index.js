const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
const router = express.Router();
const creds = require('./config');
//const exphbs =  require('express-handlebars');

const app = express();

// View engine setup
//app.engine('handlerbars', exphbs());
//app.set('view engine', 'handlebars');

// Static folder
app.use('/logistik-app/build/static', express.static(path.join(__dirname, 'static')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


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
            user: 'wilson.weissnat@ethereal.email',
            pass: 'XaQK7dKMjuqv3M76qS'
        },
        tls: {
            rejectUnauthorized: false
        }
    };
}

app.get('/', (req, res) => {
    console.log(' Hallo contact' );

});

app.post('/api/send_email', (req, res) => {

    console.log('Mail info:', req.body);
    console.log('ENV variable',process.env.NODE_ENV);

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

        smtpTransport.close();
    });
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});