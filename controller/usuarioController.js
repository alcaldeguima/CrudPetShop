const { Op } = require("sequelize");
const Usuario = require("../models/Usuario");

module.exports = [
  async function abreadd(req, res) {
    res.render("add.ejs", {});
  },

  async function add(req, res) {
    const { nome, email, senha, foto } = req.body;
    await Usuario.create({ nome, email, senha, foto }).then((usuario) => {
      res.redirect("/");
    });
  },

  async function abreedt(req, res) {},

  async function edt(req, res) {},

  async function list(req, res) {
    let usuarios = await Usuario.findAll();
    res.render("index.ejs", { Usuarios: usuarios });
  },

  async function listfiltro(req, res) {
    let pesquisar = req.body.pesquisar;
    let usuarios = await Usuario.findAll({
      where: { nome: { [Op.like]: "%" + pesquisar + "%" } },
    });
    res.render("index.ejs", { Usuarios: usuarios });
  },

  async function del(req, res) {
    let usuario = await Usuario.findByPk(req.params.id);
    await usuario.destroy();
    res.redirect("/");
  },
];
