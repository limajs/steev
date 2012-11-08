var express = require("express"),
app = express(),
server = require("http").createServer(app);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile('index.html');
});

server.listen(8000);
