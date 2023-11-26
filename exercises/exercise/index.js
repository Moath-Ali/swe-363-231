const express = require("express");
const app = express();
app.use(express.static(__dirname));
const router = require('./router');


app.use(router)

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");
});


app.get("/Concern-Confirmation", (req, res) => {
    res.sendFile(__dirname + "/Concern-Confirmation.html");
});

app.get("/Contact-Page", (req, res) => {
    res.sendFile(__dirname + "/Contact-Page.html");
});

app.get("/Create-Course", (req, res) => {
    res.sendFile(__dirname + "/Create-Course.html");
});

app.get("/Details-Page", (req, res) => {
    res.sendFile(__dirname + "/Details-Page.html");
});

app.get("/mini-games", (req, res) => {
    res.sendFile(__dirname + "/mini-games.html");
});

app.get("/Thanks", (req, res) => {
    res.sendFile(__dirname + "/Thanks.html");
});


app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
});