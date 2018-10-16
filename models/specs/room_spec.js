const assert = require("assert");
const Room = require("../room.js");

describe("Room", function() {

  let room;

  beforeEach(function(){
    room = new Room(5, false, true);
  });

  it("should have an area", function(){
    assert.strictEqual(room.sqm, 5);
  });
  it("should start unpainted", function(){
    assert.strictEqual(room.painted, false);
  });
  it("should be paintable", function(){
    assert.strictEqual(room.paintable, true);
  });
});
