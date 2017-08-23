#### koa + koa-router + nunjucks + webpack

#### build

```bash
make watch-js
make watch-css
make build-js
make build-css
make build
make start-server
```

#### project folder structure

```
|-server
|  |-api
|  |  |-qima
|  |     |-controllers
|  |     |-models
|  |     |-dao
|  |-www
|  |  |-common
|  |  |  |-views
|  |  |
|  |  |-qima
|  |  |  |-controllers
|  |  |  |-services
|  |  |  |-views
|  |  | 
|  |  |-bbs
|  |  |  |-controllers
|  |  |  |-services
|  |  |  |-views
|  |
|  |-wap
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
|-lib
|-config
|  |-db.js
|  |-router.js
|
|-app.js
|-router.js
|-gulpfile.js
|-Makefile
|-package.json

```