//will use js for routing between HTML files when GET from onclicks
const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
    res.render("index.html");
})

router.get("/contact", (req, res) => {
    res.render("./contact");
})

router.get("/prevWorkProj", (req, res) => {
    res.render("./prevWorkProj");
})

module.exports = router;