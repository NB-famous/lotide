////////////// Using this as References before using mocha//////////// Can be deleted -> no longer needed 

/* const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')

console.log(assertArraysEqual(middle([1]), [])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]  */


///////////IMPLEMENTING MOCHA AND CHAI TEST SOLUTIONS ///////////////

const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {

    it("returns the middle two values [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
      assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
    });

    it("returns ['stress', 'and'] for ['nikko', 'is', 'stress', 'and', 'needs', 'help']", () => {
      assert.deepEqual(middle(['nikko', 'is', 'stress', 'and', 'needs', 'help']), ['stress', 'and',]); 
    });
});


