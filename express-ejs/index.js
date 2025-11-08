const express = require ('express');
const app = express() ;

// memanggil view engine EJS
app.set ('view engine','ejs');

// route ke file home.ejs dengan method .get
app. get('/', (req, res) => {
    res.render('home');
});

// mengecek listen service file index.js kita sudah berjalan/belu, 
app.listen(8080, () => {
    console.log('Listening on host http://localhost:8080');
});
