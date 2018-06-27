var keystone = require('keystone');
var Types = keystone.Field.Types;

var User = new keystone.List('User');

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
});

// Provide access to keystone
User.schema.virtual('canAccessKeystone').get(function() {
	return true;
});

// Registration
User.defaultColumns = 'id, name, email';
User.register();