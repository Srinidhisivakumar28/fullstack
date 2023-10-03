
const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();

app.use(cors());

app.use("/", (req, res, next) => {
    res.send("Hello World");

});
const PORT = process.env.PORT;
app.set("PORT", 8000 || process.env.PORT);
http.createServer(app).listen(app.get("PORT"), "127.0.0.1");

