'use strict';

require('dotenv').config();

const port = process.env.PORT || 7011;

const server = require('./server.js');

server.start(port);
