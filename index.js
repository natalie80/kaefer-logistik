const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.static(path.resolve(__dirname, "../logistik-app/build")));

app.post('/api/send_email', (req, res) => {
   // console.log('index file', req.body);

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    
    /**
     host: 'ssh.natalie-kaefer.de',
     port: 22,
     secure: false,
     auth: {
            user: 'natalie-kaefer.de',
                pass: 'nkl!0407'
        },
     tls: {
            rejectUnauthorized: false
        }**/
    
    nodemailer.createTestAccount(( ) => {
        const htmlEmail = `
            <h3>Contact Details </h3>
            <ul>
                <li>Name: ${req.body.formData.name}</li>
                <li>Email: ${req.body.formData.email}</li>
                <li>Phone: ${req.body.formData.phone}</li>
            </ul>
            <h6>Message</h6>
            <p>${req.body.formData.message}</p>
        `;
        
        const mailConfig = {
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'vernon51@ethereal.email',
                pass: 'qnUpzAcD4583ZC2wMw'
            }
        };
    
        let transporter = nodemailer.createTransport(mailConfig);
        
        let mailOptions = {
            from: req.body.formData.email,
            to: 'vernon51@ethereal.email',
            sender: 'adem@web.de',
            subject: req.body.formData.subject,
            text: req.body.formData.message,
            html: htmlEmail
        };
    
        /**
         *   let mailOptions = {
            from: 'Adem',
            to: 'info@natalie-kaefer.de',
            sender: 'adem@web.de',
            subject: 'Adem React  Email',
            text: 'Hallo hier ist meine erste EMail!!',
            html: `<h4> HTML version Halli Halllo </h4>`,
            attachments: ''
        };
         */

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
              return  console.log('ERROR', err);
            }
            console.log('Message sent: %s', info.message);
            console.log('Message URL:  %s', nodemailer.getTestMessageUrl(info));
        })
    })
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
