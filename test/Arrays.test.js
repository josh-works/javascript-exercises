var assert = require('assert');

describe('Array methods', function() {
    it('should remove duplicates from the array', function() {
      var array = [1, 3, 3, 5, 5, 5];
      // write a function to make this pass here
      
      // here's the solution. use it for now, then DELETE ALL THIS CODE
      // AND WRITE IT YOURSELF!!!!!
      
      // function getUniqueNumbers(array) {
      //   var output = [];
      //   for (var i = 0; i < array.length; i++) {
      //     if (output[output.length -1] != array[i]){
      //       output.push(array[i])
      //     }
      //   }
      //   return output
      // }
      var actual = getUniqueNumbers(array);
      var expected = [1, 3, 5];
      assert.deepEqual(expected, actual);
    });
});
