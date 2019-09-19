const express = require('express');
const router = express.Router();
const { hi } = require('../controllers/fakeController');

router.get('/fake', hi);

module.exports = router;