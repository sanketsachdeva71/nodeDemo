const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require('crypto'); // Add this to generate a nonce
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to add the CSP header with nonce
app.use((req, res, next) => {
    // Generate a random nonce for each request
    res.locals.nonce = crypto.randomBytes(16).toString('base64');
    
    // Set the Content Security Policy header
    res.setHeader(
        "Content-Security-Policy",
        `script-src 'self' 'nonce-${res.locals.nonce}' https://code.jquery.com https://stackpath.bootstrapcdn.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com;`
    );
    next();
});

// Set the view engine
app.set('view engine', 'ejs'); // Change 'ejs' to your view engine if different

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to render the homepage
app.get('/', (req, res) => {
    res.render('index', { nonce: res.locals.nonce }); // Pass the nonce to the view
});

// Route to render the contact page
app.get('/contact', (req, res) => {
    res.render('contact', { nonce: res.locals.nonce }); // Pass nonce if you need it on the contact page
});

// Route to handle form submission
app.post('/send-message', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Set up Nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use the appropriate email service
        auth: {
            user: 'sanketsachdeva71@gmail.com', // Replace with your email
            pass: 'skanksachdeva@51', // Replace with your email password or app password
        },
    });

    // Email options
    let mailOptions = {
        from: email,
        to: 'sanketsachdeva71@gmail.com', // Where you want to receive the form submissions
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('There was an error sending the message.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Message sent successfully!');
        }
    });
});

// Import routes from routes.js if needed
const routes = require('./routes');
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

