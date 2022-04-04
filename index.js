var express = require("express");
var app = express();

const donoRoute = require("./routes/donoRoute");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(express.static("./public"));

require("./config/database.js");

app.use("/", donoRoute);

app.listen("3000", function () {
  console.log("Conexão iniciada na porta 3000");
});
