const express = require('express');

const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'));

app.get('/login', (req, res) => res.render('log-in'));

app.get('/terms-condition', (req, res) => res.render('terms-conditions'));

app.get('/article-details', (req, res) => res.render('article-details'));

app.get('/privacy-policy', (req, res) => res.render('privacy-policy'));

app.get('/sign-up', (req, res) => res.render('sign-up'));

app.listen(3000, () => console.log('Le serveur écoute sur le port 3000'));
