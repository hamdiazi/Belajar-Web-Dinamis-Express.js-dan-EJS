const express = require ('express');
const app = express() ;

// import data.json
const tagsData = require('./data.json');

// mengatur posision path
const path = require('path');

// memanggil view engine EJS
app.set ('view engine','ejs');


// mengatur posisi views agar bisa dipanggil dimana aja
app.set('views', path.join(__dirname, '/views'));
// contoh hasilnya nanti : /learn-express/express-ejs/views

// memanggil untuk folder static untuk kebutuhan assets
app.use(express.static(path.join(__dirname, '/public')));



// route ke file home.ejs dengan method .get
app. get('/', (req, res) => {
    res.render('home');
});


// route ke halaman cats.ejs dan passing data array cats
app.get ('/cats', (req, res) => {
    const cats = ['embul', 'floki', 'mio', 'timot'];
    res.render ('cats', {cats});
});


// route ke random.ejs
app.get('/rand',(req, res) => {
    const num =  Math.floor(Math.random() * 10) + 1;
    res.render('random', {num});
});


// route ke path untuk tag , mirip tag di situs dev.to
app.get  ('/t/:tag', (req, res) => {
    // console.log(tagsData);
    const {tag} = req.params;
    const data = tagsData[tag];
    if (data){ 
    res.render('tag', {data});
    } else {
    res.render('notfound', {tag});
    }
});






// mengecek listen service file index.js kita sudah berjalan/belu, 
app.listen(8080, () => {
    console.log('Listening on host http://localhost:8080');
});







