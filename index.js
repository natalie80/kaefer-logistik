const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.static(path.resolve(__dirname, "../logistik-app/build")));

app.post('/api/send_email', (req, res) => {
   // console.log('index file', req.body);
    
    //req.headers['Access-Control-Allow-Origin'] = '*';
    //res.set("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details </h3>
            <ul>
                <li>Name: ${req.body.formData.name}</li>
                <li>Email: ${req.body.formData.email}</li>
                <li>Phone: ${req.body.formData.phone}</li>
            </ul>
            <h6>Message</h6>
            <p>${req.body.formData.message}</p>
        `
    
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'tyshawn.beahan@ethereal.email',
                pass: 'NwfyW5GhGwSmtnGh7b'
            }
        });
        
        let mailOptions = {
            from: req.body.formData.email,
            to: 'info@natalie-kaefer.de',
            sender: 'adem@web.de',
            subject: req.body.formData.subject,
            text: req.body.formData.message,
            html: htmlEmail
        };
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
