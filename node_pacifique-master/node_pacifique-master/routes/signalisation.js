const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const signalisationCtrl = require('../controllers/signalisation');

router.get('/', signalisationCtrl.getAllSignalisation);
router.post('/', auth, signalisationCtrl.createSignalisation);
router.get('/:id', auth, signalisationCtrl.getOneSignalisation);
router.put('/:id', auth, signalisationCtrl.modifySignalisation);
router.delete('/:id', auth, signalisationCtrl.deleteSignalisation);

module.exports = router;