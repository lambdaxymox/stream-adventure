var split = require('split');
var through2 = require('through2');


function SplitAction(inputStream, outputStream) {
    this.lineNumber = 0;
    this.inputStream = inputStream;
    this.outputStream = outputStream;
};

SplitAction.prototype.go = function () {
    this.inputStream
        .pipe(split())
        .pipe(through2(tr(this)))
        .pipe(this.outputStream);
};

SplitAction.prototype.incrementLineNumber = function () {
    this.lineNumber += 1;
};

var tr = function (action) {
    return function (line, encoding, callback) {
        action.incrementLineNumber();
        if (action.lineNumber % 2 === 0) {
            this.push(line.toString().toUpperCase() + '\n');
        } else {
            this.push(line.toString().toLowerCase() + '\n');
        }
        callback();
    };
};


var main = function () {

    if (process.argv.length < 2) {
        console.log("USAGE: node [NODE_OPTIONS] program.js");
        process.exit(1);
    }

    var action = new SplitAction(process.stdin, process.stdout);
    action.go();
};

main();