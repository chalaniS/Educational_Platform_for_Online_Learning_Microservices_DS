require("./configuration/db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.listen(4002, () => console.log("Server started at : 4002"));

app.use(express.static("public"));
