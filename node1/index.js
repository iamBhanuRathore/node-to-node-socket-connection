const express = require("express");
const { Server } = require("socket.io");
const cors = require('cors');
const { createServer } = require("http");
const port = 5000;
const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credential: true
    }
});

app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    credential: true
}));
app.get("/home", (req, res) => {
    return res.send("Hello Boy");
});


io.on("connection", (socket) => {
    console.log("User Connected", socket.id);
});

httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});