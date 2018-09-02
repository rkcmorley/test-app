// index.js
import moment from 'moment';

console.log("Hello from JavaScript! How are you? Not bad at all? You sure?");
console.log(moment().startOf('day').fromNow());

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);