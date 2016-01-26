var concat = require('concat-stream');
var through2 = require('through2');


var readStream = process.stdin;
var writeStream = process.stdout;

var reverse = function (string) {
    return string.split("").reverse().join("");
};

var handleError = function (error) {
    console.error(error);
    process.exit(1);
};

var main = function () {

    if (process.argv.length < 2) {
        console.log("USAGE: node [NODE_OPTIONS] program.js");
        process.exit(1);
    }

    readStream.pipe(concat(function (buffer) {
        writeStream.write(reverse(buffer.toString()) + '\n');
    }));

};

readStream.on('error', handleError);
main();
