// OpenFusky 2018 by Posixdeon, modified by Nixpath.
var http = require("http");
var fs = require("fs");
// This is dictionary
var dicto = require("./dicto");

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(3000);
});

console.log("Access to bot is on localhost:3000 (type this in your browser).");
