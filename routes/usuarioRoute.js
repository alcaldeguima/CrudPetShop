var express = require("express");
var router = express.Router();
var usuarioController = require("../controller/usuarioController");

//listar todos os dados
router.get("/", usuarioController.list);
//listar dados com filtro
router.post("/", usuarioController.listfiltro);
//abre add
router.get("/add", usuarioController.abreadd);
//adicionar dados no banco
router.post("/add", usuarioController.add);
//abrir editar
router.get("/edt", usuarioController.abreedt);
//editar dados no banco
router.post("/edt", usuarioController.edt);
//deletar dados
router.get("/del", usuarioController.del);

module.exports = router;
