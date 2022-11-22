const express = require("express");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");

const routerDeliv = require("./routes/routing")
app.use("/routing", routerDeliv);

app.get("home", (req, res) => {
    res.render("index");
})
app.get("/contact", routerDeliv)
app.get("/prevWorkProj", routerDeliv)

app.listen(5500);