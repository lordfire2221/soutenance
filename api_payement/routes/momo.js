const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const momoCtrl = require('../controllers/momo');


router.get('/userstatus', auth, momoCtrl.getUserStatus);
router.post('/apiuser', auth, momoCtrl.apiuser);
router.post('/apikey', auth, momoCtrl.apiKey);

module.exports = router;