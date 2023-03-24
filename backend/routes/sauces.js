const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const controleSauce = require("../middleware/saucecontrole")

const sauceCtrl = require('../controllers/sauces');

//----routes de l'API

router.get("/", auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.post("/", auth, multer, controleSauce, sauceCtrl.createSauce);
router.put("/:id", auth, multer, controleSauce, sauceCtrl.modifySauce)
router.delete("/:id", auth, sauceCtrl.deleteSauce)
router.post("/:id/like", auth, sauceCtrl.likeDislikeSauce)

module.exports = router;