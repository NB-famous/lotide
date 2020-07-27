const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1 , arr2) => {

    if(eqArrays(arr1, arr2) === true){
        return `Assertion Passed: 👍👍👍` ;
    }
    else{
        return `Assertion Failed: 🚩🚩🚩` ;
    }

}


module.exports = assertArraysEqual;


// Test CODE FOR THE FUNCTION ASSERT ARRAY EQUAL ////
/* const val1 = ["hello", "punk"];
const val2 = ["hello", "punk"];

console.log(assertArraysEqual(val1 , val2)) */