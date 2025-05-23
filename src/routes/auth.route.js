const express = require('express');
const router = express.Router();
const { handleLogin } = require('../controllers/auth.controller');

// Login route
router.post('/login', handleLogin);

module.exports = router;