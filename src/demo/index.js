'use strict'
 
var http = require('http')
var nakedjs = require('../index')
 
http
  .createServer(nakedjs(__dirname + '/page.js'))
  .listen(8080)
