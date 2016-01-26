var request = require('request');


var readStream = process.stdin;
var writeStream = process.stdout;

var main = function () {

    var portNumber = 8099;
    var url = 'http://localhost:8099/';
    var r = request.post({url: url});

    readStream
        .pipe(r)
        .pipe(writeStream);

};

main();