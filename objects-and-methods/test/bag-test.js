describe('bag', function() {

  context('initialization', function() {
    xit('is empty', function() {
      var bag = new Bag();
      assert.isTrue(bag.isEmpty());
    });

    xit('has a count of zero', function() {
      var bag = new Bag();
      assert.equal(bag.count(), 0);
    });

    xit('has an empty candies array', function() {
      var bag = new Bag();
      assert.deepEqual(bag.candies, []);
    });

  });

  context('candies', function() {
    xit('has candies in it', function() {
      var candy = new Candy('Sweedish Fish');
      var bag = new Bag();
      bag.candies.push(candy);
      assert.deepEqual(bag.candies, [candy]);
    });

    xit('is not empty when it has a candy in it', function() {
      var candy = new Candy('Milk Duds');
      var bag = new Bag();
      bag.candies.push(candy);
      assert.isFalse(bag.isEmpty());
    });

    xit('knows how many candies it contains', function() {
      var candy = new Candy('100 Grand');
      var bag = new Bag();
      bag.candies.push(candy);
      assert.equal(bag.count(), 1);
    });

    xit('has candies in the bag, and those candies have a type', function() {
      var candy = new Candy('Snickers');
      var bag = new Bag();
      bag.candies.push(candy);
      assert.equal(bag.candies[0].type, "Snickers");
    });


    xit('can test if it contains a candy of a certain type', function() {
      var candy = new Candy('Black Liquorice');
      var bag = new Bag();
      bag.candies.push(candy);
      assert.isTrue(bag.containsType("Black Liquorice"));
      assert.isFalse(bag.containsType("Justin's Peanut Butter Cups"))
    });

  });
});
