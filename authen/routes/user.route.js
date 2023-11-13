const express = require('express');
const { getUsers, getUserByEmail, getUserById } = require('../controllers/user.controller');
const router = express.Router();

// route: user
router.get('/', getUsers);

// route: user
router.get('/:id', getUserById);

// route: user
router.get('/email/:email', getUserByEmail);

module.exports = router;