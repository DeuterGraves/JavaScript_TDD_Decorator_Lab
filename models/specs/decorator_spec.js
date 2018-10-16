const assert = require("assert");
const PaintCan = require("../paint_can.js");
const Room = require("../room.js");
const Decorator = require("../decorator.js");

describe("Decorator", function(){
  let decorator;

  beforeEach(function(){
    paintCan = new PaintCan(2);
    paintCan2 = new PaintCan(4);
    room = new Room(5, false, true);
    decorator = new Decorator([]);
  });

  it("should start with an empty stock of paint", function(){
    assert.deepStrictEqual(decorator.stock, [])
  });

  it("should be able to add a can of paint to stock", function(){
    decorator.addStock(paintCan)
    actual = decorator.stock.length;
    assert.strictEqual(actual, 1)
  });

  it("should be able to count the total litres in stock", function(){
    decorator.addStock(paintCan);
    decorator.addStock(paintCan2);
    stock = decorator.totalLitres();
    assert.strictEqual(stock, 6);
  });

  it("should be able to calculate if it has enough paint for room", function(){
    decorator.addStock(paintCan);
    decorator.addStock(paintCan2);
    actual = decorator.canPaint(room);
    assert.equal(actual, true);
  });
  it ("should be able to paint a room", function(){
    decorator.addStock(paintCan);
    decorator.addStock(paintCan2);
    actual = decorator.paintsRoom(room);
    assert.strictEqual(actual, "Decorator paints room!");
  });

});
