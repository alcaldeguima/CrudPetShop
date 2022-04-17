const { Op } = require("sequelize");
const Dono = require("../models/Dono");

async function abreadd(req, res) {
  res.render("add.ejs", {});
}

async function add(req, res) {
  const { nome, email, genero } = req.body;
  const foto = req.file.filename;
  await Dono.create({ nome, email, genero, foto }).then((dono) => {
    res.redirect("/");
  });
}

async function abreedt(req, res) {
  let dono = await Dono.findByPk(req.params.id);
  res.render("edt.ejs", { dono: dono });
}

async function edt(req, res) {
  let dono = await Dono.findByPk(req.params.id);
  dono.nome = req.body.nome;
  dono.email = req.body.email;
  dono.genero = req.body.genero;

  if (req.file.filename != "") {
    dono.foto = req.file.filename;
  }
  await dono.save();
  res.redirect("/");
}

async function list(req, res) {
  let donos = await Dono.findAll();
  res.render("index.ejs", { Donos: donos });
}

async function listfiltro(req, res) {
  let pesquisar = req.body.pesquisar;
  let donos = await Dono.findAll({
    where: { nome: { [Op.like]: "%" + pesquisar + "%" } },
  });
  res.render("index.ejs", { Donos: donos });
}

async function del(req, res) {
  let dono = await Dono.findByPk(req.params.id);
  await dono.destroy();
  res.redirect("/");
}

module.exports = { abreadd, add, list, listfiltro, abreedt, edt, del };
