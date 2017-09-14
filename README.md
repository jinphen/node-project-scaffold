#### koa + koa-router + nunjucks + webpack

#### build

```bash
make pre
```

#### project folder structure

```
|-server
|  |-config
|  |-lib
|  |-middlewares
|  |-public
|  |-src
|     |-common
|     |   |-views
|     |       |-base.html
|     |-home
|         |-controllers
|         |-services
|         |-views
|  |-app.js
|
|-client
|  |-www
|  |  |-bower_components
|  |  |-build
|  |  |  |-js
|  |  |  |-css
|  |  |
|  |  |-js
|  |  |  |-components
|  |  |  |-qima
|  |  |  |-bbs
|  |  |
|  |  |-sass
|  |  |  |-base
|  |  |  |-fn
|  |  |  |-widget
|  |  |  |-pages
|  |  |     |-qima
|  |  |     |-bbs
|  |  |
|  |  |-vendor
|  |  |-bower.json
|
|-gulpfile.js
|-Makefile
|-package.json

```
