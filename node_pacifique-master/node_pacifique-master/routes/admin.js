const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const adminCtrl = require('../controllers/admin');

router.get('/', adminCtrl.getAllAdmin);
router.post('/', adminCtrl.createAdmin);
router.get('/:id', auth, adminCtrl.getOneAdmin);
router.get('/email/:email', adminCtrl.getOneAdminByEmail);
router.put('/:id', auth, adminCtrl.modifyAdmin);
router.post('/:id', auth, adminCtrl.deleteAdmin);
router.post('/activate/:id', auth, adminCtrl.activateAdmin);

module.exports = router;