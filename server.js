'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: '*' }), express.json());

const photoRouter = require('./routes/photoRoute.js');

app.get('/', (req, res) => res.status(200).json('server is running'));

// http://localhost:7000/api/users/setProfilePic

app.use('/api/users', photoRouter);

const start = (port) => {
  if (!port) { throw new Error('missing port'); }
  app.listen(port, () => {
    console.log(`photo upload server up on port ${port}`);
  })
};

module.exports = {
  app: app,
  start: start,
}
