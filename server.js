
const PORT = process.env.PORT || 5000

var express = require("express");
const { start } = require("repl");

var server = express();

server.get("/", (req, res, next) => {
    console.log("Today menu")
    res.send("what do you want");
});

server.get("/a", (req, res, next) => {
    console.log("biryani")
    res.send("biryani is available in RS/200");
});

server.get("/b", (req, res, next) => {
    console.log("Qurma")
    res.send("qurma is available in RS/100");
});

server.get("/c", (req, res, next) => {
    console.log("coldrink ")
    res.send("qurma is available in RS/50");
});

server.listen(PORT, () => { console.log("server is running on port " + PORT) });





