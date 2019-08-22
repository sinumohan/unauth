const express = require('express')
const app = express(), http = require('http'),socket = require('socket.io'), port = 9990;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:8081');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers",'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json,Authorization');
    next();
});

const server = http.createServer(app).listen(port, function(){ console.log("Unauth server listening on port " + port); });

app.use('/static',express.static('public'))

const io = socket.listen(server);

io.on('connection', function(socket){
    socket.on('disconnect', function(){ console.log('user disconnected'); });
    socket.on('chat message', function(msg){ socket.emit('chat back', "Got your msg"); });
});