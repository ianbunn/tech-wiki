var express = require("express");
var app = express();

var bodyParser = require("body-parser");
// Forces the use of the native querystring Node library
var parseURLencoded = bodyParser.urlencoded({extended: false});

var blocks = {
    "Fixed": "Fastened securely in position",
    "Movable": "Capable of being moved",
    "Rotating": "Moving in a circle around its center"
};


app.use(express.static("public"));

app.param("name", function (request, response, next) {
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();

    request.blockName = block;

    next();
});

app.delete("/blocks/:name", function (request, response) {

    delete blocks[request.blockName];

    response.sendStatus(200);
});

// Sends back server response 
app.get("/blocks", function (request, response) {

    if (request.query.limit >= 0) {
        response.json(blocks.slice(0, request.query.limit));
    } else {
        response.json(Object.keys(blocks));
    }
});

app.get("/blocks/:name", function (request, response) {
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    var description = blocks[block];

    if (!description) {
        response.status(404).json(`No description found for ${request.params.name}`);
    } else {
        response.json(description);
    }
});

app.post("/blocks",parseURLencoded,function(request,response){
    var newBlock = request.body;
    blocks[newBlock.name] = newBlock.description;
    // Sets the response status code to 201 Created and response with new block name
    response.status(201).json(newBlock.name);
});

app.listen(3000);