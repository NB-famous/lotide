
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

    if (actual !== expected) {
      return `Assertion Failed: 🚩🚩🚩${actual} !== ${expected} 🚩🚩🚩` ;
    } else {
      return `Assertion Passed: 👍👍👍${actual} === ${expected}👍👍👍`;
    }
  };


const words = ["ground", "control", "to", "major", "tom"];

const callback = (num) => {}

const map = (array, callingBack) =>{ 
    /* console.log('array: ', array);
    console.log('callback: ', callingBack); */

    let results = [];

    for (let item of array) {

        results.push(callingBack(item)); //?
     /*    console.log('item BEFORE: ', item);
        console.log('item AFTER: ', callBack(item));
        console.log('---'); */
    }

    return results; //?
}


const results1 = map(words, word => word[1]); //?
//console.log(results1); //

