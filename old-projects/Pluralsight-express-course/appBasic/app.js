var express = require("express");
var app = express();

// Sends back server response 
app.get("/", function(request,response){
    console.log(request.headers.host + request.url);

    // response.write(...) can also be used
    // response.send(`What up, world \n`);

    // Responding with JSON
    var blocks = ["Fixed","Movable","Rotating"];
    // response.json(blocks);
    // Default redirect code 302
    // If you want a redirect to move permanently, use code 301
    response.redirect(301,`/parts`);

    response.end();
});

var PORT = 8080

// Binds app to tcp port 8080
app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
});