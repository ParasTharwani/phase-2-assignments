
import { EventEmitter } from 'events';
import { URL } from 'url';


// events

const myEmitter = new EventEmitter();
myEmitter.on('sayHello', (name) => console.log(`Hello, ${name}!`));
myEmitter.emit('sayHello', 'User');

//URL
const myUrl = new URL('https://example.com/path?name=user');
console.log('Host:', myUrl.host);  // example.com
console.log('Pathname:', myUrl.pathname);  
console.log('Query Parameter (name):', myUrl.searchParams.get('name'));