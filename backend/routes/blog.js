const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const blogCtrl = require('../controllers/blog');

router.get('/', auth, blogCtrl.getAllBlogs);
router.post('/', auth, multer, blogCtrl.createPost);
router.get('/:id', auth, blogCtrl.getOnePost);
router.put('/:id', auth, multer, blogCtrl.modifyPost);
router.delete('/:id', auth, blogCtrl.deletePost);

module.exports = router;