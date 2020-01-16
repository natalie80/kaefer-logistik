const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');
//const app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.static(path.resolve(__dirname, "../logistik-app/build")));

//app.post('/api/send_email', (req, res) => {
   // console.log('index file', req.body);

   // res.header("Access-Control-Allow-Origin", "*");
   // res.header("Access-Control-Allow-Headers", "Content-Type");
    
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
        }
     ------------------
     const mailConfig = {
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'vernon51@ethereal.email',
                pass: 'qnUpzAcD4583ZC2wMw'
            }
        };
     
     **/
    
   // const transporter = nodemailer.createTestAccount(( ) => {
     /**   const htmlEmail = `
            <h3>Contact Details </h3>
            <ul>
                <li>Name: ${req.body.formData.name}</li>
                <li>Email: ${req.body.formData.email}</li>
                <li>Phone: ${req.body.formData.phone}</li>
            </ul>
            <h6>Message</h6>
            <p>${req.body.formData.message}</p>
        `;
       **/
        const mailConfig = {
            host: 'smtp.gmail.com',
            port: 4665,
            auth: {
                user: 'natalikaefer@gmail.com',
                pass: 'adem1301'
            }
        };
    
        let transporter = nodemailer.createTransport( "SMTP", mailConfig);
    
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

        transporter.verify((error, success) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Server is ready to take messages');
            }
        });

        router.post('/send', (req, res, next) => {
             //res.header("Access-Control-Allow-Origin", "*");
             //res.header("Access-Control-Allow-Headers", "Content-Type");

            const name = req.body.formData.name,
                  email = req.body.formData.email,
                  phone = req.body.formData.phone,
                  message = req.body.formData.message,
                  content = `name: ${name} \n email: ${email} \n phone ${phone} \n message: ${message} `;

            let mailOptions = {
                from: req.body.formData.name,
                to: 'natalikaefer@gmail.com',
                sender: 'adem@web.de',
                subject: req.body.formData.subject,
                text: content
            };


            transporter.sendMail(mailOptions, (err, info) => {
                if(err){
                    res.json({
                       status: 'fail'
                    });
                  return  console.log('ERROR', err);
                } else {
                    res.json({
                        status: 'success'
                    });
                }
                console.log('Message sent: %s', info.message);
                //console.log('Message URL:  %s', nodemailer.getTestMessageUrl(info));
            })

        });
  //  })
//});
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
