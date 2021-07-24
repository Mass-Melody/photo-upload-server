'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors(), express.json());

app.get('/', (req, res) => res.status(200).json('server is running'));

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
