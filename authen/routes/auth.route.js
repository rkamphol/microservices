const express = require('express');
const { registerUser, signInUser, refreshToken } = require('../controllers/auth.controller');
const router = express.Router();

// route: Registration
router.post('/sign-up', registerUser);

// route: Sign in
router.post('/sign-in', signInUser);

// route: Refresh token
router.post('/refresh-token', refreshToken);

module.exports = router;