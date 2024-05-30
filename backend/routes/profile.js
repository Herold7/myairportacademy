const express = require('express');
const router = express.Router();

const profileCtrl = require('../controllers/profile');
const multer = require('../middleware/multer-config');


router.get('/', profileCtrl.getAllProfiles);
router.post('/', multer, profileCtrl.createClient);
router.get('/:id', profileCtrl.getOneClient);
router.put('/:id', multer, profileCtrl.modifyClient);
router.delete('/:id', profileCtrl.deleteClient);

module.exports = router;