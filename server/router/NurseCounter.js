const express = require('express');
const router = express.Router();
const {create,getUser} = require('../controller/NurseCounter')

router.post('/nursecount', create);
router.get('/nursecount/:userId', getUser);

module.exports = router;
