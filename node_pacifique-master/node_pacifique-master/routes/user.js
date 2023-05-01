const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middlewares/auth');


router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/reset/:email', userCtrl.resetPassword);
router.get('/ping', auth, userCtrl.ping);
router.get('/:id', auth, userCtrl.getOneUser);
module.exports = router;