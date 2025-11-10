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

// mengecek listen service file index.js kita sudah berjalan/belu, 
app.listen(8080, () => {
    console.log('Listening on host http://localhost:8080');
});

