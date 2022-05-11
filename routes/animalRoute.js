var express = require("express");
var router = express.Router();
const animalController = require("../controller/animalController");
const multer = require("../config/multer");

//listar todos os dados
router.get("/", animalController.list);
//listar dados com filtro
router.post("/", animalController.listfiltro);
//abre add
router.get("/add", animalController.abreadd);
//adicionar dados no banco
router.post("/add", multer.single("foto"), animalController.add);
//abrir editar
router.get("/edt/:id", animalController.abreedt);
//editar dados no banco
router.post("/edt/:id", multer.single("foto"), animalController.edt);
//deletar dados
router.get("/del/:id", animalController.del);

module.exports = router;
