'use strict';

require('dotenv').config();

const server = require('./server.js')
const PORT = process.env.PORT || 3311
server.start(PORT)