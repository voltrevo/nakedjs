'use strict'

var express = require('express')

var nakedjs = require('..')

var app = express()

app.get('/', nakedjs(__dirname + '/page.js'))
app.listen(8080)
