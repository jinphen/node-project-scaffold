var app = require('koa')();
var path = require('path');
var static = require('koa-static-server');
var logger = require('koa-logger');
var koaNunjucks = require('koa-nunjucks-2');
var router = require('./lib/router');
var config = require('./config/');
var defaults = require('koa-router-default');

/**
 * render
 */
app.context.render = koaNunjucks({
    ext: 'html',
    path: './projects',
    nunjucksConfig: {
        autoescape: false,
        noCache: true
    }
});

/**
 * logger
 */
app.use(logger());

/**
 * static files
 */
app.use(static({rootDir: './public', rootPath: '/public', log: true}));

/**
 * router
 */
app.use(router.routes());
app.use(defaults(router.routes(), '/www/qima'));

/**
 * listen port
 */
app.listen(config.port);
console.log('Serve listen at: ' + config.port);