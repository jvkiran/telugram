var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);

var routes = {
	views: importRoutes('./views'),
}
// Setup Route Bindings
exports = module.exports = function (app) {
	app.get('/', routes.views.index);
}