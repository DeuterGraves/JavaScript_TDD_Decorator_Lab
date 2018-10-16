const Decorator = function(stock){
  this.stock = stock;
};

Decorator.prototype.addStock = function(paint){
  this.stock.push(paint);
};

Decorator.prototype.totalLitres = function(){
  total = 0
  for ( let item of this.stock){
    total += item.litres;
  };
  return total
};

Decorator.prototype.canPaint = function (room) {
  paintOnHand = this.totalLitres();
  if (paintOnHand >= room.sqm){
    return true;
  }else{
    return false;
  };
};

Decorator.prototype.paintsRoom = function(room){
  if (this.canPaint(room) === true){
    return "Decorator paints room!"
  } else {
    "Decorator needs more paint!"
  }
};

module.exports = Decorator;
