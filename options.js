var path = require('path');
var pkg = require('./package.json');
var eslint = require('eslint');

module.exports = {
  cmd: 'miclint',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Mic lint',
  eslint: eslint,
  eslintConfig: {
    configFile: path.join(__dirname, 'eslint-config-mic/index.js')
  },
  formatter: null
};

module.exports.flow = {
  cmd: 'miclint',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Mic lint - flow variant',
  eslint: eslint,
  eslintConfig: {
    configFile: path.join(__dirname, 'eslint-config-mic/flow/index.js')
  },
  formatter: null
};
