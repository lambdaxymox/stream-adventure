var through2 = require('through2');

var write = function (buffer, encoding, next) {
    this.push(upperCase(buffer));
    next();
};

var flush = function (done) {
    done();
};

var upperCase = function (buffer) {
    return buffer.toString().toUpperCase();
};

var main = function () {

    var input = process.stdin;
    var output = process.stdout;
    var tr = through2(write, flush);

    if (process.argv.length < 2) {
        console.log("USAGE: node [NODE_OPTIONS] program.js");
        process.exit(1);
    }

    input.pipe(tr).pipe(output);

};

main();