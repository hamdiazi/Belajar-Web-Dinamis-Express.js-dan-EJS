const express = require ('express');
const app = express() ;

// mengatur posision path
const path = require('path');

// memanggil view engine EJS
app.set ('view engine','ejs');


// mengatur posisi views agar bisa dipanggil dimana aja
app.set('views', path.join(__dirname, '/views'));
// contoh hasilnya nanti : /learn-express/express-ejs/views

// route ke file home.ejs dengan method .get
app. get('/', (req, res) => {
    res.render('home');
});


// route ke random.ejs
app.get('/rand',(req, res) => {
    const num =  Math.floor(Math.random() * 10) + 1;
    res.render('random', {num});
});

// mengecek listen service file index.js kita sudah berjalan/belu, 
app.listen(8080, () => {
    console.log('Listening on host http://localhost:8080');
});



