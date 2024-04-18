const express = require("express");
const io = require("socket.io-client");

const app = express();
const port = 4000;
const socket = io.connect('http://localhost:5000', {
    autoConnect: true,
    reconnection: true
});

socket.on('connect', () => {
    console.log("Socket is connected");
});

app.get('/home', (req, res) => {
    return res.json('Hello boy');
});

app.listen(port, () => {
    console.log(`Port is listening on ${port}`);
});