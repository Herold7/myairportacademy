const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');//middleware d'authentification
const multer = require('../middleware/multer-config');//middleware de gestion des fichiers
const registrationCtrl = require('../controllers/registration');//Import du contrôleur

//Routes d'accès aux données
router.get('/', auth, registrationCtrl.getAllRegistrations);
router.post('/', multer, registrationCtrl.createInterview);
router.get('/:id', auth, registrationCtrl.getOneInterview);
router.put('/:id', auth, multer, registrationCtrl.modifyInterview);
router.delete('/:id', auth, registrationCtrl.deleteInterview);

module.exports = router;//Export du router vers app.js