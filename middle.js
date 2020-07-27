const assertArraysEqual = require('./assertArraysEqual');

const middle = (target) => {

    let arr = Math.floor(target.length / 2);
    let storage = [];
    
     if(target.length <= 2){
         return [];
     }
     else if(target.length % 2 !== 0){
        storage.push(target[arr]);        
     }
     else if ( target.length % 2 === 0){
        storage.push(target[arr - 1]);
        storage.push(target[arr]);
     }

    return storage;
}

module.exports = middle;
//module.exports = assertArraysEqual;
 
      
// Test Code for Middle Function //

/* console.log(assertArraysEqual(middle([1]), [])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4] */


   






