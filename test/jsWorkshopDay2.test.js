var assert = require('assert');

describe('JsWorkshopDay2', function() {
  // these exercises are a "port" of:
  // https://frontend.turing.io/lessons/module-1/javascript-workshop-2.html
  it('makeSet should remove duplicates from array', function() {
    this.skip(); // remove this to unskip this test
    var array = [1, 3, 3, 5, 5, 5];
    // write a function to make this pass here
  
    // here's the solution. use it for now, then DELETE ALL THIS CODE
    // AND WRITE IT YOURSELF!!!!!
  
    // function makeSet(array) {
    //   var output = [];
    //   for (var i = 0; i < array.length; i++) {
    //     if (output[output.length -1] != array[i]){
    //       output.push(array[i])
    //     }
    //   }
    //   return output
    // }
    var actual = makeSet(array);
    var expected = [1, 3, 5];
    assert.deepEqual(expected, actual);
  });
  
  
  it('spellOut should take a word and consecutively add letters until the full word is formed', function() {
    this.skip(); 
    
    // work in progress
    function spellOut(word) {
      return ["h", "ha", "hap", "happ", "happy"];
    }
    
    var actual = spellOut("happy");
    var expected = ["h", "ha", "hap", "happ", "happy"];
    assert.deepEqual(expected, actual);
  });
});
