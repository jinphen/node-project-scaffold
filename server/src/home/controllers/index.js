var router = require('koa-router')();

router.get('/', function* () {
    yield this.render('www/qima/views/index');
});

module.exports = router;