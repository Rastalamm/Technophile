module.exports = Tablet;

function Tablet(x, y){
  this.touch = function(x, y){
    return {
      x : x,
      y : y
    }
  }
};