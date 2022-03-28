var express = require("express");
var router = express.Router();
const usuarioController = require("../controller/usuarioController");
const multer = require("../config/multer");

//listar todos os dados
router.get("/", usuarioController.list);
//listar dados com filtro
router.post("/", usuarioController.listfiltro);
//abre add
router.get("/add", usuarioController.abreadd);
//adicionar dados no banco
router.post("/add", multer.single("foto"), usuarioController.add);
//abrir editar
router.get("/edt/:id", usuarioController.abreedt);
//editar dados no banco
router.post("/edt/:id", multer.single("foto"), usuarioController.edt);
//deletar dados
router.get("/del/:id", usuarioController.del);

module.exports = router;
