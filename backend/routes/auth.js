const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/auth');
const emailcontrole = require('../middleware/emailcontrole');
const passwordcontrole = require('../middleware/passwordcontrole');

//--Route de l'authentification

router.post('/signup', emailcontrole, passwordcontrole, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;