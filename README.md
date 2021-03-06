# nakedjs
Runs js files through browserify and adds html boilerplate.

What do we need that html around our JavaScript for? ;-).

# CLI
```sh
npm install -g nakedjs
nakedjs page.js
```

```js
// example page.js

'use strict'

window.addEventListener('load', function() {
  document.body.innerHTML = 'Hello world!'
})
```

Visit [http://localhost:8080/](http://localhost:8080/)

# API
`npm install --save nakedjs`

```js
'use strict'

var http = require('http')
var nakedjs = require('nakedjs')

http
  .createServer(nakedjs('path/to/file.js'))
  .listen(8080)
```

Or with express:

```js
'use strict'

var express = require('express')
var nakedjs = require('nakedjs')

var app = express()

app.get('/', nakedjs('path/to/file.js'))
app.listen(8080)
```

# Require .html and .css

nakedjs is about putting JavaScript first. So if you want to use html and css too, just reverse the traditional process by pulling in everything from JavaScript instead of html. I take my hat off to [browserify](https://www.npmjs.com/package/browserify) for their elegant solution that makes this super-easy. There's no need to pass transforms to browserify explicitly, because it'll read the ones your package needs in package.json. Nothing stands in the way of this process when you run nakedjs, so I highly recommend you use [html2jsify](https://www.npmjs.com/package/html2jsify) and [cssify](https://www.npmjs.com/package/cssify) by adding this field to your package.json:

```json
"browserify": {
  "transform": [
    "html2jsify",
    "cssify"
  ]
},
```

and run `npm install --save html2jsify cssify`.

Then you can write something like this:

```html
// circle.html

<div class='circle'></div>
```

```css
// circle.css

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: blue;
}
```

```js
// page.js

'use strict'

require('./circle.css')

var circle = require('./circle.html')

window.addEventListener('load', function() {
  document.body.appendChild(circle())
})
```

```json
// package.json

{
  "browserify": {
    "transform": [
      "html2jsify",
      "cssify"
    ]
  }
}
```

`npm install --save html2jsify cssify`

`nakedjs page.js`

Visit [http://localhost:8080/](http://localhost:8080/)

(You should probably fill out the rest of your package.json, possibly using `npm init`, but this stripped down version works too if you want to quickly hack this together.)

# nakedcoffee

Like [coffeescript](http://coffeescript.org/)? Why not use the approach above to serve up naked coffee?

Add this to package.json:

```json
"browserify": {
  "transform": [
    "coffeeify"
  ]
},
```

`npm install --save coffeeify`

```coffee
// page.coffee

window.addEventListener 'load', ->
  document.body.innerHTML = 'Hello world!'
```

`nakedjs page.coffee`

Visit [http://localhost:8080/](http://localhost:8080/)
