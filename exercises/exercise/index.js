const express = require("express");
const app = express();
app.use(express.static(__dirname));


app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");
});

app.get("/Concern-Confirmation-ar", (req, res) => {
    res.sendFile(__dirname + "/Concern-Confirmation-ar.html");
});
app.get("/Concern-Confirmation", (req, res) => {
    res.sendFile(__dirname + "/Concern-Confirmation.html");
});
app.get("/Contact-Page-ar", (req, res) => {
    res.sendFile(__dirname + "/Contact-Page-ar.html");
});
app.get("/Contact-Page", (req, res) => {
    res.sendFile(__dirname + "/Contact-Page.html");
});
app.get("/Create-Course-ar", (req, res) => {
    res.sendFile(__dirname + "/Create-Course-ar.html");
});
app.get("/Create-Course", (req, res) => {
    res.sendFile(__dirname + "/Create-Course.html");
});
app.get("/Details-Page-ar", (req, res) => {
    res.sendFile(__dirname + "/Details-Page-ar.html");
});
app.get("/Details-Page", (req, res) => {
    res.sendFile(__dirname + "/Details-Page.html");
});
app.get("/index-ar", (req, res) => {
    res.sendFile(__dirname + "/index-ar.html");
});
app.get("/mini-games", (req, res) => {
    res.sendFile(__dirname + "/mini-games.html");
});
app.get("/Thanks-ar", (req, res) => {
    res.sendFile(__dirname + "/Thanks-ar.html");
});
app.get("/Thanks", (req, res) => {
    res.sendFile(__dirname + "/Thanks.html");
});


app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
});