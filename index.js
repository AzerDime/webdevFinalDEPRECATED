const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.get("/index", (req, res) => {
    res.render("/views/index");
})

const routerDeliv = require("./routes/routing")

app.use("/routing", routerDeliv);

app.get("/contact", routerDeliv)
app.get("/prevWorkProj", routerDeliv)

app.listen(5500);