//will use js for routing between HTML files when GET from onclicks
const express = require("express");
const ejs = require("ejs")
const app = express();
const router = express.Router();

app.set("view engine", "ejs");

router.get("home", (req, res) => {
    res.render("index");
});

router.get("contact", (req, res) => {
    res.render("contact");
});

router.get("prevWorkProj", (req, res) => {
    res.render("prevWorkProj");
});

app.use(router);

app.get("home", router);
app.get("contact", router);
app.get("prevWorkProj", router);