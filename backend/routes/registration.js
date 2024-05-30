const express = require('express');
const router = express.Router();

const registrationCtrl = require('../controllers/registration');
const multer = require('../middleware/multer-config');


router.get('/', registrationCtrl.getAllRegistrations);
router.post('/', multer, registrationCtrl.createInterview);
router.get('/:id', registrationCtrl.getOneInterview);
router.put('/:id', multer, registrationCtrl.modifyInterview);
router.delete('/:id', registrationCtrl.deleteInterview);

module.exports = router;