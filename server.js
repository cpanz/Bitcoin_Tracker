var express = require("express");
var app = express();
var path = require("path");
var server = require("http").Server(app);
var io = require("socket.io")(server);

var port = 3000;

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function(socket) {
    console.log("New connection made!");

    socket.emit("Message-from-server", {
        greeting: "Hello from Server"
    });

    socket.on("Message-from-client", function(msg) {
        console.log(msg);
    });
});

server.listen(port, function() {
    console.log("Listening on port ", port);
});

