var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1465433643;
var currentMoment = moment.unix(timestamp);
console.log('current momment', currentMoment.format('MMM D, YY @ h:mm a'));

console.log('current momment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));

console.log(typeof(4));