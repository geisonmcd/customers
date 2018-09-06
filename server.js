var express = require('express');
var app = express();

// console.log(__dirname + "/client");
app.use(express.static(__dirname + "/client"));

const port = 5000;
app.listen(port, function () {
    console.log(`Subiu na porta ${port}`)
});