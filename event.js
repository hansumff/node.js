// event.js

var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('some_event', function(arg1, arg2) {
	console.log('some_event occured.',arg1, arg2);
});
emitter.on('some_event', function(arg1, arg2) {
	console.log('some_event occured.',arg1, arg2);
});

setTimeout(function() {
	emitter.emit('some_event', 'byvoid', 1991);
}, 1000)