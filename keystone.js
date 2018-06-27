require('dotenv').config()
// Require keystone
var keystone = require('keystone');

// Initialise keystone with your project's configuration.
keystone.init({
	'cookie secret': 'secure string goes here',
	'name': 'telugram',
	'user model': 'User',
	'auth': true,
	'auto update': true,
	'views': 'templates/views',
	'view engine': 'pug'
});

// Load project's Module
keystone.import('models');
keystone.set('routes', require('./routes'));
keystone.start();