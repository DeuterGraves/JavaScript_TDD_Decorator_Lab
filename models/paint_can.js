const PaintCan = function(litres){
  this.litres = litres;
};

PaintCan.prototype.hasPaint = function () {
  if (this.litres > 0) {
    return true;
  }
  else {
    return false;
  }
};

PaintCan.prototype.usePaint = function (room) {
  this.litres -= room.sqm;
};

module.exports = PaintCan;
