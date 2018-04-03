'use strict';
/* eslint no-var: "off" */
var fs = require('fs');
var path = require('path');

module.exports = function () {
	return fs.readFileSync(path.join(__dirname, 'cows.txt'), 'utf8')
		.replace(/\n$/, '').split('\n\n\n');
};
