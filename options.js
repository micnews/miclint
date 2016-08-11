var path = require('path');
var pkg = require('./package.json');

module.exports = {
  cmd: 'miclint',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Mic lint',
  eslint: require('eslint'),
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  },
  formatter: null
};
