const { Op } = require("sequelize");
const Animal = require("../models/Animal");

async function abreadd(req, res) {
  res.render("animal/add.ejs", {});
}

async function add(req, res) {
  const { nome, especie, peso } = req.body;
  const foto = req.file.filename;
  await Animal.create({ nome, especie, peso, foto }).then((animal) => {
    res.redirect("/animal");
  });
}

async function abreedt(req, res) {
  let animal = await Animal.findByPk(req.params.id);
  res.render("animal/edt.ejs", { animal: animal });
}

async function edt(req, res) {
  let animal = await Animal.findByPk(req.params.id);
  animal.nome = req.body.nome;
  animal.especie = req.body.especie;
  animal.peso = req.body.peso;

  if (req.file.filename != "") {
    animal.foto = req.file.filename;
  }
  await animal.save();
  res.redirect("/animal");
}

async function list(req, res) {
  let animais = await Animal.findAll();
  res.render("animal/index.ejs", { Animais: animais });
}

async function listfiltro(req, res) {
  let pesquisar = req.body.pesquisar;
  let animais = await Animal.findAll({
    where: { nome: { [Op.like]: "%" + pesquisar + "%" } },
  });
  res.render("animal/index.ejs", { Animais: animais });
}

async function del(req, res) {
  let animal = await Animal.findByPk(req.params.id);
  await animal.destroy();
  res.redirect("/animal");
}

module.exports = { abreadd, add, list, listfiltro, abreedt, edt, del };
