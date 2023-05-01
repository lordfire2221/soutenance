const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const presenceCtrl = require('../controllers/presence');

router.get('/', presenceCtrl.getAllPresence);
router.post('/', auth, presenceCtrl.createPresence);
router.get('/:id', auth, presenceCtrl.getOnePresence);
router.get('/apprenant/:apprenant', auth, presenceCtrl.getPresenceByApprenant);
router.get('/pending/:status', auth, presenceCtrl.getAllPendingPresence);
router.get('/date/:apprenant/:date', auth, presenceCtrl.getPresenceByDate);
router.put('/:id', auth, presenceCtrl.modifyPresence);
router.delete('/:id', auth, presenceCtrl.deletePresence);

module.exports = router;