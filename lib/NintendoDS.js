var GameConsole = require('./GameConsole.js')
var WebBrowser = require('./WebBrowser.js')

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
extend(NintendoDS.prototype, GameConsole);
extend(NintendoDS.prototype, WebBrowser);

function NintendoDS(){
  GameConsole.call(this, 'Nintendo DS');
  WebBrowser.call(this, 'www.thegoogle.com');
};

module.exports = NintendoDS;