const express = require("express");
const router = express();


router.get("/Concern-Confirmation-ar", (req, res) => {
    res.sendFile(__dirname + "/Concern-Confirmation-ar.html");
});
router.get("/Contact-Page-ar", (req, res) => {
    res.sendFile(__dirname + "/Contact-Page-ar.html");
});
router.get("/Create-Course-ar", (req, res) => {
    res.sendFile(__dirname + "/Create-Course-ar.html");
});
router.get("/Details-Page-ar", (req, res) => {
    res.sendFile(__dirname + "/Details-Page-ar.html");
});
router.get("/index-ar", (req, res) => {
    res.sendFile(__dirname + "/index-ar.html");
});
router.get("/Thanks-ar", (req, res) => {
    res.sendFile(__dirname + "/Thanks-ar.html");
});



module.exports = router;