const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('index', { title: 'Welcome', message: 'Hello, EJS from routes!' });
});

// Another example route (About page)
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Us', message: 'This is the about page.' });
});

// Services Page Route
router.get('/services', (req, res) => {
  res.render('services'); // This renders services.ejs
});

// Contact Us Page Route
router.get('/contact', (req, res) => {
  res.render('contact'); // This renders contact.ejs
});


module.exports = router;
