'use strict';

require('dotenv').config();

require('./server.js').start(process.env.PORT||4000);