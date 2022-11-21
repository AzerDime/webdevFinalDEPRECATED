const express = require("express");
const app = express();

app.set("view engine", "html");

app.get("/home", (req, res) => {
    //rendering index.ejs page
    res.render("index");
});

const routerDeliv = require("./routes/routing")
app.use("/routing", routerDeliv);

app.get("home", routerDeliv);
app.get("contact", routerDeliv);
app.get("prevWorkProj", routerDeliv);

app.listen(5500);