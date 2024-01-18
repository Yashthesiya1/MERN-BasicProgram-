const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('myEvent', (data) => {
  console.log('Event triggered with data:', data);
});

// Emitting the event
myEmitter.emit('myEvent', "Hello Yash.");
