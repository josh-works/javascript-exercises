var assert = require('assert');

describe('Array methods', function() {
  
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
    var world_cup = ["Germany", "Mexico", "Iceland", "Portugal"]
    // Call a method on the world_cup variable to remove and return
    // the last element of the array
    
    last_element = world_cup.pop()
    assert.deepEqual("Portugal", last_element)
    assert.deepEqual(["Germany", "Mexico", "Iceland"], world_cup)
  })
  
  it('test9', function() {
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
  }) // missing semicolon?
  
  
});





















