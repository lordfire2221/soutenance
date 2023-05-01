const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const revisionCtrl = require('../controllers/revision');

router.get('/', revisionCtrl.getAllRevision);
router.post('/', auth, multer, revisionCtrl.createRevision);
router.get('/:id', auth, revisionCtrl.getOneRevision);
router.put('/:id', auth, multer, revisionCtrl.modifyRevision);
router.delete('/:id', auth, revisionCtrl.deleteRevision);

module.exports = router;