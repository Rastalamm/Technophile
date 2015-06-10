var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

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
extend(SmartPhone.prototype, Phone);
extend(SmartPhone.prototype, Tablet);
extend(SmartPhone.prototype, GameConsole);
extend(SmartPhone.prototype, WebBrowser);

function SmartPhone(phoneNumber){
  Phone.call(this, phoneNumber);
  Tablet.call(this, {
    x : 123456,
    y : -123456});
  GameConsole.call(this, 'Smart Phone');
  WebBrowser.call(this, 'www.theinternet.com');
};

module.exports = SmartPhone;