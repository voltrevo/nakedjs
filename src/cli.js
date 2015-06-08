#!/usr/bin/env node

'use strict'

var argv = require('minimist')(process.argv.slice(2))

if (argv._.length < 1) {
  console.error('Usage: nakedjs <file> [opts]')
}

var http = require('http')
var nakedjs = require('./index')

var port = argv.p || argv.port || 8080

http
  .createServer(nakedjs(argv._[0]))
  .listen(port)

console.log('Server running at http://localhost:' + port + '/')
