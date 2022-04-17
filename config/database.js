const sequelize = require("sequelize");

const dbconfig = require("./dbconfig");

const conexao = new sequelize(dbconfig);

const Usuario = require("../models/Usuario");
const Dono = require("../models/Dono");

Usuario.init(conexao);
Dono.init(conexao);

module.exports = conexao;
