var fs = require('fs');

var main = function () {
    
    var filePath = "";

    if (process.argv.length < 3) {
        console.log("USAGE: node [NODE_OPTIONS] program.js");
        process.exit(1);
    }

    filePath = process.argv[2];

    fs.exists(filePath, function (exists) {
        if (exists) {
            var file = fs.createReadStream(filePath);
            file.pipe(process.stdout);          
        } else {
            console.log("File not found: " + filePath);
        }

    });

};

main();