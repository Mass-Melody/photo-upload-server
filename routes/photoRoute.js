'use strict';

const photoRoute = require('express').Router();
const userController = require('../controllers/userController.js');

photoRoute.post('/setProfilePic', userController.upload(process.env.S3_BUCKET_NAME).single('croppedImage', (req, res, err) => {

  if (err) { return res.status(400).json({ success: false, message: err.message }); }

}), (req, res, next) => {
  console.log(req.file);
  res.status(200).json({ data: req.file });
});

module.exports = photoRoute;
