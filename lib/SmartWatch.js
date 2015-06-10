var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');

//Creates the mixin function to enable multiple inheritance
function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)){
      destination[k] = source [k];
    }
  }
  return destination;
}

//Extends class and applys the behavior to the destination class
extend(SmartWatch.prototype, Watch);
extend(SmartWatch.prototype, Tablet);

function SmartWatch(){
Watch.call(this, 911);
Tablet.call(this, {
  x : 123456,
   y : -123456});
};

module.exports = SmartWatch;