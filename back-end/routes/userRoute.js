const express = require('express');
const { register, allUsers, login } = require('../controllers/user');

const userRoutes = express.Router();


userRoutes.post('/register',register);
userRoutes.post('/login',login)
userRoutes.get('/allUser',allUsers)

module.exports = userRoutes