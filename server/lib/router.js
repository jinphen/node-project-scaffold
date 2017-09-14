var glob = require('glob');
var path = require('path');
var app = require('koa')();
var env = require('./env');

var rootRouter = require('koa-router')();
var dispatchFolder = path.join(__dirname, '../projects');
var files = glob.sync(path.join(dispatchFolder, '/**/controllers/**/*.js'));

rootRouter.use(env());

files.forEach(function(filepath, index) {
    var rt = require(filepath);
    var rtPath = path.relative(dispatchFolder, filepath).replace(/\.js$/, '');
    
    rtPath = rtPath.replace(/\/controllers/,'').replace(/\/?index$/, '');

    rootRouter.use('/' + rtPath, rt.routes());
});

module.exports = rootRouter;