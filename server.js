var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/bravenewt', function(request, response){
    response.send('Hello MGT-656! This is brave newt!');
});

app.get('/brave-newt', function(request, response){
    response.send('Hello MGT-656! This is brave newt!');
});

app.get('/brave+newt', function(request, response){
    response.send('Hello MGT-656! This is brave newt!');
});

app.get('/brave newt', function(request, response){
    response.send('Hello MGT-656! This is brave newt!');
});

app.get('/brave%20newt', function(request, response){
    response.send('Hello MGT-656! This is brave newt!');
});


app.listen(process.env.PORT || 4000);