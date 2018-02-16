const express = require('express');
const app = express();
const port = 3001;
const productsData = require('./src/data/productsData.json');
const bannerData = require('./src/data/bannerData.json');

app.get('/products', function (req, res) {
    res.json(productsData);
    // res.send(dataFile);
});

app.get('/promo', function (req, res) {
    res.json(bannerData);
});

app.listen(process.env.port || port, () => console.log("listening on port 3001"))