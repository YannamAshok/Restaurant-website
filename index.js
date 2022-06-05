const express = require("express");
const app = express();
const path = require("path");
const dbConnect = require("./config/db");

dbConnect();


app.use(express.json({ extended: false }));


app.use(express.static(__dirname + "/public"))
app.get("/", (req, res) => res.sendFile(path.join(__dirname, '/public', 'index.html')))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
});

const PORT = process.env.PORT || "3000";
app.listen(PORT, () => console.log(`server started on port no ${PORT}`));