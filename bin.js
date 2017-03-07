#!/usr/bin/env node
/* eslint-disable import/no-commonjs */
const options = require('./options');

const flow = process.argv.indexOf('--flow') !== -1;

require('standard-engine').cli(flow ? options.flow : options);
