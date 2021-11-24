var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(__dirname + '/'));
app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './server.js'));
});
app.listen(process.env.PORT || 3000);