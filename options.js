/* eslint-disable import/no-commonjs */
const path = require('path');
const pkg = require('./package.json');
const eslint = require('eslint');

module.exports = {
  cmd: 'miclint',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Mic lint',
  eslint,
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json'),
  },
  formatter: null,
};

module.exports.flow = {
  cmd: 'miclint',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Mic lint - flow variant',
  eslint,
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc-flow.json'),
  },
  formatter: null,
};
