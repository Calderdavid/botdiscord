var express = require('express');
var app = express();


const PORT = process.env.PORT || 5000;
app.set('port', PORT);

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});