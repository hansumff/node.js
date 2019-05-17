// util.inspect(object,[showHidden],[depth],[colors])

var util = require('util');

function Person() {
	this.name = 'byvoid';
	
	this.toString = function() {
		return this.name;
	}
}

var obj = new Person(); 

console.log(util.inspect(obj));
console.log(util.inspect(obj, true));