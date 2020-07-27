////////////// Using this as References before using mocha framework//////////// Can be deleted -> no longer needed


//const tail = require('../tail'); */


//const newTestArr = ["Lighthouse", "Labs", "Nick"];//?

//console.log(tail(["Hello", "Lighthouse", "Labs", "Nick"]));
//console.log(eqArrays(tail(["Hello","Lighthouse", "Labs", "Nick"]), ["Lighthouse", "Labs", "Nick"])); // 

///////////IMPLEMENTING MOCHA AND CHAI TEST SOLUTIONS ///////////////


const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {

    it("returns an array [2, 3] for [1, 2, 3]", () => {
      assert.deepEqual(tail([1, 2, 3]), [2,3]);
    });

    it("returns array of ['5'] for ['5']", () => {
      assert.deepEqual(tail(['5']), ['5']); 
    });
});