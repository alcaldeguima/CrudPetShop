var express = require("express");
var app = express();
var path = require("path");

const Usuario = require("./models/Usuario");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require("./config/database.js");

app.get("/add", function (req, res) {
  res.render("add.ejs", {});
});

app.post("/add", async function (req, res) {
  const { nome, email, senha, foto } = req.body;
  await Usuario.create({ nome, email, senha, foto }).then((usuario) => {
    res.send("Oi");
  });
});

app.listen("3000", function () {
  console.log("Conexão iniciada na porta 3000");
});
