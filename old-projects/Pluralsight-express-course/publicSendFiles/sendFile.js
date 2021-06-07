var express = require("express");
var app = express();

// Sends back server response 
// app.get("/", function (request, response) {
//     response.sendFile(`${__dirname}/public/index.html`);
// });

// Static middleware serving files from the public folder gives the same result as the response.sendFile(...) above
app.use(express.static("public"));

app.listen(3000);