var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req,res){
    res.send('hello world')
});

// list to a particular port
app.listen(3000, function(){
    console.log('Server is running on port 3000')
});