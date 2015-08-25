var app       = require('iso-app');
var renderer  = require('iso-app-renderer-react');

module.exports = app()
  .use(renderer())
  .map('/*', require('./modules/home'))
;