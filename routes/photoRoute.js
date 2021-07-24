'use strict';

const photoRoute = require('express').Router();
const userController = require('../controllers/userController.js');

photoRoute.post('/setProfilePic', userController.setProfilePic);

module.exports = photoRoute;
