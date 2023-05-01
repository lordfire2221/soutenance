const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const noteCtrl = require('../controllers/note');

router.get('/', noteCtrl.getAllNote);
router.get('/stats/:id/:type', noteCtrl.getAllStats);
router.post('/', auth, multer, noteCtrl.createNote);
router.get('/:id', auth, noteCtrl.getOneNote);
router.put('/:id', auth, multer, noteCtrl.modifyNote);
router.delete('/:id', auth, noteCtrl.deleteNote);

module.exports = router;