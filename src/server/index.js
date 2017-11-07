require('ignore-styles');
require("babel-core/register");
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env','react','stage-0']
})
require("babel-polyfill");
require('./app');
