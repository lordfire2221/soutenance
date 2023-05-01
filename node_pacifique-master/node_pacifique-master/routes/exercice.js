const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const exerciceCtrl = require('../controllers/exercice');

router.get('/', exerciceCtrl.getAllExercice);
router.post('/', auth, multer, exerciceCtrl.createExercice);
router.get('/:id', auth, exerciceCtrl.getOneExercice);
router.put('/:id', auth, multer, exerciceCtrl.modifyExercice);
router.delete('/:id', auth, exerciceCtrl.deleteExercice);

module.exports = router;