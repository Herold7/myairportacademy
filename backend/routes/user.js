const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');//Import du contrôleur
const auth = require('../middleware/auth');//middleware d'authentification

//Routes d'accès aux données
router.get('/', auth, userCtrl.getAllUsers);
router.post('/', userCtrl.createUser);
router.get('/:id', auth, userCtrl.getOneUser);
router.put('/:id', auth, userCtrl.modifyUser);
router.delete('/:id', auth, userCtrl.deleteUser);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;//Export du router vers app.js