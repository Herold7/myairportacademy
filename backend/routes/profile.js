const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');//middleware d'authentification
const multer = require('../middleware/multer-config');//middleware de gestion des fichiers
const profileCtrl = require('../controllers/profile');//Import du contrôleur

//Routes d'accès aux données
router.get('/', auth, profileCtrl.getAllProfiles);
router.post('/', multer, profileCtrl.createClient);
router.get('/:id', auth, profileCtrl.getOneClient);
router.put('/:id', auth, multer, profileCtrl.modifyClient);
router.delete('/:id', auth, profileCtrl.deleteClient);

module.exports = router;//Export du router vers app.js