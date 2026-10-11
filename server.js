const express = require("express");
const path = require("path");
const app = express();

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// public folder
app.use(express.static(path.join(__dirname, "public")));

// routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/login", (req, res) => {
    res.render("login")
});

// listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
