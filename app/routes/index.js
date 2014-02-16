'use strict';

module.exports = function(app) {
// Home route
	var index = require('../controllers/index');
	app.get('/', index.render);
	var docs = require('../controllers/docs');
	app.get('/docs', docs.render);
};
