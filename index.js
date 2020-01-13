const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const path = require('path');

require('dotenv').config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

app.get('/api', (req, res) => {
    res.send('API server: running');
})

app.post('/api/form', (req, res) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NODEMAILER_ADDRESS,
                pass: process.env.NODEMAILER_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
            }
        });

        let mailOptions = {
            from: req.body.name,
            to: process.env.NODEMAILER_ADDRESS,
            replyTo: req.body.email,
            subject: req.body.name,
            text: req.body.message,
        };

        transporter.sendMail(mailOptions, function(err, data) {
            if(err) {
                console.log('Error: ', err);
            } else {
                console.log('Email sent successfully');
            }
        });

    });


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})