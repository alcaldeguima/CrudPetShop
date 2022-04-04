var express = require("express");
var router = express.Router();
const donoController = require("../controller/donoController");
const multer = require("../config/multer");

//listar todos os dados
router.get("/", donoController.list);
//listar dados com filtro
router.post("/", donoController.listfiltro);
//abre add
router.get("/add", donoController.abreadd);
//adicionar dados no banco
router.post("/add", multer.single("foto"), donoController.add);
//abrir editar
router.get("/edt/:id", donoController.abreedt);
//editar dados no banco
router.post("/edt/:id", multer.single("foto"), donoController.edt);
//deletar dados
router.get("/del/:id", donoController.del);

module.exports = router;
