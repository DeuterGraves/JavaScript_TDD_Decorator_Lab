const assert = require("assert");
const PaintCan = require("../paint_can.js");
const Room = require("../room.js");

describe("paintCan", function() {

  let paintCan;

  beforeEach(function(){
    paintCan = new PaintCan(6);
  });
  it("should have paint in it", function(){
    assert.strictEqual(paintCan.litres, 6);
  });
  it("should be able to check for paint", function(){
    actual = paintCan.hasPaint();
    assert.equal(actual, true);
  });
  it("should be able to empty self of paint", function(){
    const room = new Room(5, false, true);
    paintCan.usePaint(room);
    actual = paintCan.litres;
    assert.strictEqual(actual, 1);
  });
});
