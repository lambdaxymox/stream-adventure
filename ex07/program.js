var http = require('http');
var through2 = require('through2');

var usage = function() {
    return "USAGE: node [NODE OPTIONS] program.js PORT_NUMBER";
}

var isInteger = function (number) {
    var intRegex = /^[+-]?\d+$/;
    if (intRegex.test(number.toString())) {
        return true;
    } else {
        return false;
    }
};

var main = function () {

    var portNumber = Number(process.argv[2]);

    if (process.argv.length < 3) {
        console.log(usage());
        process.exit(1);
    }

    if (isNaN(portNumber) || (typeof portNumber !== 'number')) {
        console.log("Error: PORT_NUMBER must be an integer.");
        console.log(usage());
        process.exit(1);
    }

    var server = http.createServer(function (request, response) {
        if (request.method === 'POST') {
            response.writeHead(200);
            request.pipe(through2(function (chunk, encoding, callback) {
                this.push(chunk.toString().toUpperCase());
                callback();
            }))
            .pipe(response);
        } else {
            response.writeHead(403);
            response.end("This is not a valid POST request.\n\n")
        }
    });

    server.listen(portNumber, function () {
        console.log("Listening for POST requests on port: " + portNumber + ".\n\n");
    });

};

main();