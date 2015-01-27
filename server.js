var express = require('express');
var app = express();

app.get('/brave%20newt', function(request, response){
    response.send('Hello MGT-656! This is brave newt!');
});

app.listen(process.env.PORT || 4000);