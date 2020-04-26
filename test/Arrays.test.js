var assert = require('assert');

describe('Array methods', function() {
  // these tests based on Turing's `ruby-exercises`, specifically:
  // data-types/collections/arrays.rb
  it('test0', function() {
    this.skip();
    // In the line below, create a new empty array
    var empty = []
    assert.deepEqual([], empty);
  });
  
  it('test1', function() {
    this.skip();
    // In the line below, create and array with the numbers 1 - 5
    var oneThroughFive = [1, 2, 3, 4, 5]
    assert.deepEqual([1, 2, 3, 4, 5], oneThroughFive);
  });
  
  it('test2', function() {
    this.skip();
    var nums = [1, 2, 3]
    // In the line below, call a method on the nums variable
    // defined above to access the second element
    var actual = nums[1]
    assert.deepEqual(2, actual);
  });
  
  it('test3', function() {
    this.skip();
    var nums = [1,2,3]
    // In the line below, call a method on the nums variable
    // defined above to access the last element
    var actual = nums[2]
    assert.deepEqual(3, actual);
  });
  
  it('test4', function() {
    this.skip();
    var nums = [1,2,3,4,5,6,7, "hi", "there"]
    // In the line below, call a method on the nums variable
    // defined above to return the number of items in the array
    var actual = nums.length
    assert.deepEqual(9, actual);
  });
  
  it('test5', function() {
    this.skip();
    var nums = [1,2,3,4,5,6,7, "hi", "there"]
    // In the line below, call a method on the nums variable
    // defined above to access the last element
    // but try to find another way than in test3
    var actual = nums[nums.length - 1]
    assert.deepEqual("there", actual);
  });
  
  it('test6', function() {
    this.skip();
    hummus = ["tahini", "chickpeas", "lemons"]
    // Call a method on the hummus variable that will
    // tell us how many elements there are in the array
    var result = hummus.length
    assert.deepEqual(3, result);
  });
  
  it('test7', function(){
    this.skip();
    var world_cup = ["Germany", "Mexico", "Iceland", "Portugal"]
    // In the line below, add the element "Brazil" to the end of the world_cup array
    world_cup.push("Brazil")
    assert.deepEqual("Brazil", world_cup.slice(-1)[0])

    // Use a different method to add the element "Japan" to the end of the array
    world_cup[world_cup.length] = "Japan"
    assert.deepEqual("Japan", world_cup.slice(-1)[0])
  });
  
  it('test8', function() {
    this.skip();
    var world_cup = ["Germany", "Mexico", "Iceland", "Portugal"]
    // Call a method on the world_cup variable to remove and return
    // the last element of the array
    last_element = world_cup.pop()
    assert.deepEqual("Portugal", last_element)
    assert.deepEqual(["Germany", "Mexico", "Iceland"], world_cup)
  })
  
  it('test9', function() {
    this.skip();
    var karaoke = ["Shake it Off", "Dancing Queen", "Bohemian Rhapsody"]
    // Call a method on the karaoke variable to ask whether "Toxic"
    // is an element or not
    var toxicInArray = null
    for (var i = 0; i < karaoke.length; i++) {
      if (karaoke[i] == "Toxic") {
        toxicInArray = true
      } else {
        toxicInArray = false
      }
    }
    assert.deepEqual(false, toxicInArray)
    
    // Now call a method on the karaoke variable to ask whether "Dancing Queen"
    // is an element or not
    
    var dancingQueenInArray = null
    for (var i = 0; i < karaoke.length; i++) {
      if (karaoke[i] == "Dancing Queen") {
        return dancingQueenInArray = true
      } else {
        dancingQueenInArray = false
      }
    }
    assert.deepEqual(true, dancingQueenInArray)
  }) 
  
  it('test10', function() {
    this.skip();
    var band = ["Guitar", "Drums", "Bass"]
    // Call a method on the band variable to add the element "Vocals"
    // to the beginning of the array
    band.unshift("Vocals")
    assert.deepEqual(["Vocals", "Guitar", "Drums", "Bass"], band)
  })
  
  it('test11', function() {
    this.skip();
    var garden = ["Tulips", "Tomatoes", "Basil", "Peppers"]
    // Call a method to remove and return the first element from the garden array
    var firstElement = garden.shift()
    assert.deepEqual(["Tomatoes", "Basil", "Peppers"], garden)
    assert.deepEqual("Tulips", firstElement)
  })
  
  it('test12', function(){
    this.skip();
    var teams = ["Rockies", "Avalanche", "Nuggets", "Broncos", "Rapids"]
    // Call a method on the teams variable to get the second, third, and fourth teams
    
    var someTeams = teams.slice(1, 4)
    assert.deepEqual(["Avalanche", "Nuggets", "Broncos"], someTeams)
    
    // Now use a different method on the teams variable to get the first and second teams
    var someTeams = teams.slice(0,2)
    assert.deepEqual(["Rockies", "Avalanche"], someTeams)
  })
  
  it('test13', function(){
    this.skip();
    var fourteeners = ["Pikes Peak", null, "Mount Elbert", null, "Mount Evans"]
    // Call a method on the fourteeners variable to remove the nils
    // and set a new variable equal to this cleaned-up array

    var cleanedUpFourteeners = fourteeners.filter(function(n){return n;})
    
    assert.deepEqual(["Pikes Peak", "Mount Elbert", "Mount Evans"], cleanedUpFourteeners)
  })
  
  it('test14', function() {
    this.skip();
      var pokemon = [["Squirtle", "Charmander", "Bulbasaur"], ["Pikachu"], "Staryu"]
    // Call a method on the pokemon variable to remove the nesting
      var pokemon = pokemon.concat.apply([], pokemon)
      assert.deepEqual(["Squirtle", "Charmander", "Bulbasaur", "Pikachu", "Staryu"], pokemon)
  })
  
  // HERE BE 🐉 THE REST OF THESE TESTS ARE NOT DONE DO NOT TOUCH THEM
  it('test15', function() {
    this.skip();
    var scores = [23, 56, 34, 29, 48]
    // Call a method on the scores variables that will
    // move the elements two spots to the left
    var newScores = scores
    assert.deepEqual([34, 29, 48, 23, 56], newScores)
    // 
    //   // Now call a method on the scores variables that will
    //   // move the elements one spot to the right
    //   var newScores = scores
    assert.deepEqual([48, 23, 56, 34, 29], newScores)
  })
  
    it('test16', function() {
      this.skip();
      //   var vowels = ["a", "e", "y", "i", "o", "u", "y"]
      //   // Call a method on the vowels variable to remove "y"
      // 
      assert.deepEqual(["a", "e", "i", "o", "u"], vowels)
    })
    
    it('test17', function() {
      this.skip();
      //   var furniture = ["couch", "bed", "table"]
      //   // Call a method on the furniture variable to add the element
      //   // "dresser" in between the elements "couch" and "bed"
      //   var new_furniture = furniture
      assert.deepEqual(["couch", "dresser", "bed", "table"], new_furniture)
    })
    
    it('test18', function() {
      this.skip();
      //   var children = ["Sarah", "Owen", "Peter"]
      //   // Call a method on the children variable to combine them into
      //   // one string like this: "Sarah, Owen, Peter"
      //   var one_string = children
      assert.deepEqual("Sarah, Owen, Peter", one_string)
    })
    
    it('test19', function() {
      this.skip();
      //   var ascending = [1,2,3,4,5]
      //   // Call a method on the ascending variable to create an array
      //   // with the elements in the opposite order
      //   var descending = ascending
      assert.deepEqual([5,4,3,2,1], descending)
    })
    
    it('test20', function() {
      this.skip();
      //   var dice = [1,2,3,4,5,6]
      //   // Call a method on the dice variable to get a random element out
      //   // of the array
      //   var roll = dice
      //   assert roll <= 6
      //   assert roll >= 1
      //   // Note, this assertion assumes the Ruby Version is 2.4 or higher.
      //   // This test will fail with expecting roll to be a FixNum if the
      //   // Ruby version is 2.3 or earlier
      //   assert_instance_of Integer, roll
      
    })

  
});





















