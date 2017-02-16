#!/usr/bin/env node

var options = require('./options');
var flow = process.argv.indexOf('--flow') !== -1;

require('standard-engine').cli(flow ? options.flow : options);
