const sequelize = require("sequelize");

const dbconfig = require("./dbconfig");

const conexao = new sequelize(dbconfig);

const Usuario = require("../models/Usuario");

Usuario.init(conexao);

module.exports = conexao;
