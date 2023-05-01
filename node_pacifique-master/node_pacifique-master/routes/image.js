const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const imageCtrl = require('../controllers/image');

router.get('/:type', imageCtrl.getAllImage);
router.post('/', auth, multer, imageCtrl.createImage);
router.get('/:id', auth, imageCtrl.getOneImage);
router.put('/:id', auth, multer, imageCtrl.modifyImage);
router.delete('/:id', auth, imageCtrl.deleteImage);

module.exports = router;