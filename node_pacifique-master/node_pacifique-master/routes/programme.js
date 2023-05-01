const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const programmeCtrl = require('../controllers/programme');

router.get('/', programmeCtrl.getAllProgramme);
router.post('/', auth, programmeCtrl.createProgramme);
router.get('/apprenant/:apprenant/:type', auth, programmeCtrl.getProgrammeByApprenant);
router.get('/date/:apprenant/:type/:date', auth, programmeCtrl.getProgrammeByDate);
router.get('/:id', auth, programmeCtrl.getOneProgramme);
router.get('/type/:type', auth, programmeCtrl.getProgrammeByType);
router.put('/:id', auth, programmeCtrl.modifyProgramme);
router.delete('/:id', auth, programmeCtrl.deleteProgramme);

module.exports = router;