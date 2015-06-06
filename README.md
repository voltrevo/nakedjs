# nakedjs
Runs js files through browserify and adds html boilerplate.

What do we need that html around our JavaScript for? ;-).

# CLI
```
// page.js

'use strict'

window.addEventListener('load', function() {
  document.body.innerHTML = 'Hello world!'
})
```

```
npm install -g nakedjs
nakedjs page.js
```

Visit [http://localhost:8080/](http://localhost:8080/)

# API
`npm install --save nakedjs`

```
'use strict'

var http = require('http')
var nakedjs = require('nakedjs')

http
  .createServer(nakedjs('path/to/file.js'))
  .listen(8080)
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
