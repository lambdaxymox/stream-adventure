#!/usr/bin/env node

var exec = require('child_process').exec;

var child = exec('node ./node_modules/stream-adventure/bin/cmd.js',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    }
);

