const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

console.log("This is Jakobs change");

console.log("this is my recommendation")
