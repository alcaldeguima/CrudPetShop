var express = require("express");
var app = express();

const usuarioRoute = require("./routes/usuarioRoute");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(express.static("./public"));

require("./config/database.js");

app.use("/", usuarioRoute);

app.listen("3000", function () {
  console.log("Conexão iniciada na porta 3000");
});
