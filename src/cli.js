#!/usr/bin/env node

'use strict'

if (process.argv.length !== 3) {
  console.error('Usage: nakedjs <file>')
  process.exit(1)
}

var http = require('http')
var nakedjs = require('./index')

http
  .createServer(nakedjs(process.argv[2]))
  .listen(8080)
