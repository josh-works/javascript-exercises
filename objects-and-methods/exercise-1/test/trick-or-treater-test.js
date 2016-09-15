describe('trick or treater', function() {

  context('initialization', function() {
    xit('wears a costume', function() {
      var costume = new Costume("Ghost");
      var trickOrTreater = new TrickOrTreater(costume);
      assert.equal(trickOrTreater.dressedUpAs(), "Ghost");
    });

  });

  context('candies', function() {


    var trickOrTreater = new TrickOrTreater(new Costume("Stefon"));
    xit('has an empty bag', function() {
      var costume = new Costume("Scarecrow");
      var trickOrTreater = new TrickOrTreater(costume);
      assert.isTrue(trickOrTreater.bag.isEmpty());
    });

    xit('has no candy to start', function() {
      var trickOrTreater = new TrickOrTreater(new Costume("Mummy"));
      assert.isFalse(trickOrTreater.hasCandy());
    });

    xit('can get candy', function() {
      var trickOrTreater = new TrickOrTreater(new Costume("Alien"));
      var candy = new Candy("Wax Bottles");
      trickOrTreater.getCandy(candy);
      assert.isFalse(trickOrTreater.bag.isEmpty());
    });

    xit('has candy after getting candy', function() {
      var trickOrTreater = new TrickOrTreater(new Costume("Knight"));
      var candy = new Candy("Nerds Rope");
      trickOrTreater.getCandy(candy);
      assert.isTrue(trickOrTreater.hasCandy());
    });

    xit('knows how much candy is in the bag', function() {
      var trickOrTreater = new TrickOrTreater(new Costume("Richard Nixon"));
      assert.equal(trickOrTreater.candyCount(), 0);
      var candy = new Candy("Jujubees");
      trickOrTreater.getCandy(candy);
      assert.equal(trickOrTreater.candyCount(), 1);
    });

    xit('can eat candy', function() {
      var trickOrTreater = new TrickOrTreater(new Costume("Stefon"));
      trickOrTreater.getCandy(new Candy("Oh Henry"));
      trickOrTreater.getCandy(new Candy("Good & Plenty"));
      trickOrTreater.getCandy(new Candy("Toothbrush"));
      assert.equal(trickOrTreater.candyCount(), 3);

      trickOrTreater.eatCandy();
      assert.equal(trickOrTreater.candyCount(), 2);

      trickOrTreater.eatCandy();
      assert.equal(trickOrTreater.candyCount(), 1);
    });
  });
});
