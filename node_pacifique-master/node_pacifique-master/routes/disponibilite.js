const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const disponibiliteCtrl = require('../controllers/disponibilite');

router.get('/', disponibiliteCtrl.getAllDisponibilite);
router.post('/', auth, disponibiliteCtrl.createDisponibilite);
router.get('/:id', auth, disponibiliteCtrl.getOneDisponibilite);
router.get('/pending/:status', auth, disponibiliteCtrl.getAllDisponibiliteByStatus);
router.get('/apprenant/:apprenant/:type', auth, disponibiliteCtrl.getOneDisponibiliteByApprenant);
router.get('/type/:type', auth, disponibiliteCtrl.getDisponibiliteByType);
router.put('/:id', auth, disponibiliteCtrl.modifyDisponibilite);
router.put('/activate/:id', auth, disponibiliteCtrl.activateDisponibilite);
router.delete('/:id', auth, disponibiliteCtrl.deleteDisponibilite);

module.exports = router;