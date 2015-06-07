'use strict'

var browserify = require('browserify')

module.exports = function(path, lang) {
  lang = lang || 'en'

  return function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})

    res.write(
      '<!DOCTYPE html>\n' +
      '<html lang=\'' + lang + '\'><head><meta charset=\'utf-8\'><title></title><script>\n'
    )

    var browserifyStream = browserify([], {debug: true}).add(path).bundle()

    browserifyStream.on('data', function(data) {
      res.write(data)
    })

    browserifyStream.on('end', function() {
      res.end('</script></head><body></body></html>\n')
    })
  }
}
