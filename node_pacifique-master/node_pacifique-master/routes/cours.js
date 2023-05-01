const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const coursCtrl = require('../controllers/cours');

router.get('/', coursCtrl.getAllCours);
router.post('/', auth, coursCtrl.createCours);
router.post('/:id', auth, coursCtrl.deleteCours);
router.get('/:id', auth, coursCtrl.getOneCours);
router.get('/num/:num', auth, coursCtrl.getOneCoursByNum);
router.put('/:id', auth, coursCtrl.modifyCours);

module.exports = router;