const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');//middleware d'authentification
const multer = require('../middleware/multer-config');//middleware de gestion des fichiers

const blogCtrl = require('../controllers/blog');//Import du contrôleur

//Routes d'accès aux données
router.get('/', auth, blogCtrl.getAllBlogs);
router.post('/', auth, multer, blogCtrl.createPost);
router.get('/:id', auth, blogCtrl.getOnePost);
router.put('/:id', auth, multer, blogCtrl.modifyPost);
router.delete('/:id', auth, blogCtrl.deletePost);

module.exports = router;//Export du router vers app.js