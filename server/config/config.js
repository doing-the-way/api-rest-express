'use-strict';
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = {
	development: {
		//db: 'mongodb://localhost/yo-express-development',
		db: 'mongodb://data1:123456@ds147167.mlab.com:47167/dbcrud'
	},
	test: {
		db: 'mongodb://localhost/yo-express-test'
	},
	production: {
		db: 'mongodb://localhost/yo-express-production'
	}
};

module.exports = config[env];
