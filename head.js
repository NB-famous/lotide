// FUNCTION IMPLEMENTATION
/* const assertEqual = function(actual, expected) {

    if (actual !== expected) {
      return `Assertion Failed: ${actual} !== ${expected} ` ;
    } else {
      return `Assertion Passed: ${actual} === ${expected}`;
    }
  }; */

  //// Main Code ////

  const assertEqual = require('./assertEqual'); // This is code so that we could use this exported function


  const head = function(val1){
      for(i=0; i < val1.length; i++){
          return val1[0];
      }
  }

  module.exports = head;


  
  // TEST CODE
/*   console.log(assertEqual(head([5,6,7]), 5));
  console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")); */