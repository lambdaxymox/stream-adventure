var fs = require('fs');

var main = function () {
    
    var input = process.stdin;
    var output = process.stdout;

    if (process.argv.length < 2) {
        console.log("USAGE: node [NODE_OPTIONS] program.js");
        process.exit(1);
    }
    
    input.pipe(output);
};

main();