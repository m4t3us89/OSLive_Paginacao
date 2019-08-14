const express = require('express');
const router = express.Router();
const ctrlLogin = require('./index');

router.post('/', ctrlLogin.login);

module.exports = router;
