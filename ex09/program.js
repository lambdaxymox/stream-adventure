var websocket = require('websocket-stream');
var stream = websocket('ws://localhost:8099');

stream.write('hello\n', 'utf8', function () {
    stream.end();
});