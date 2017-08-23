module.exports = function() {
    return function*(next) {
        var controllers = parseRouter(this._matchedRoute);
        var nunjucksEnv = this.render.env;

        this._env = {
            controller: controllers.join('_'),
            root_controller: controllers[0]
        };

        if (nunjucksEnv) {
            nunjucksEnv.addGlobal('_env', this._env);
            nunjucksEnv.addGlobal('JSON', JSON);
            console.log('add nunjucks globa vars _env =>');
            console.log(nunjucksEnv.getGlobal('_env'));
        }

        yield next;
    }
}

function parseRouter(path) {
    path = path.replace(/^\//, '').replace(/\/$/, '');
    return path.split('/');
}
