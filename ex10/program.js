var through2 = require('through2');
var trumpet = require('trumpet');

var tr = trumpet();
var readStream = process.stdin;
var writeStream = process.stdout;


var ws = tr.selectAll('.loud', function (loud) {
    loud.createReadStream()
        .pipe(through2(function (chunk, encoding, next) {
            this.push(chunk.toString().toUpperCase());
            next();
        }))
        .pipe(writeStream);
});


readStream.pipe(through2( function (chunk, encoding, next) {
    tr.selectAll('.loud', function (loud) {

    })
}));

