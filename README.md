# nakedjs
Runs js files through browserify and adds html boilerplate.

What do we need that html around our JavaScript for? ;-).

# Try it out!
```
npm install
node demo/index.js
```

Visit http://localhost:8080/

# Basic Usage
`npm install --save nakedjs`

```
'use strict'

var http = require('http')
var nakedjs = require('nakedjs')

http
  .createServer(nakedjs('path/to/file.js'))
  .listen(8080, '127.0.0.1')
```

Or with express:

```
'use strict'

var express = require('express')
var nakedjs = require('nakedjs')

var app = express()

app.get('/', nakedjs('path/to/file.js'))
app.listen(8080)
```
