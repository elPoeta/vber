const express = require("express");
const router = express.Router();
const { googleOAuth } = require('../controllers/googleOAuthController');

router.post('/googleoauth', googleOAuth);

module.exports = router;
