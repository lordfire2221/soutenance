const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-test');

const apprenantCtrl = require('../controllers/apprenant');

router.get('/', apprenantCtrl.getAllApprenant);
router.post('/', multer, apprenantCtrl.createApprenant);
router.get('/:id', auth, apprenantCtrl.getOneApprenant);
router.get('/email/:email', apprenantCtrl.getOneApprenantByEmail);
router.put('/:id', multer, apprenantCtrl.modifyApprenant);
router.post('/:id', auth, apprenantCtrl.deleteApprenant);
router.post('/activate/:id', auth, apprenantCtrl.activateApprenant);

module.exports = router;