




const eqObjects = function(obj1, obj2) {

    let key1 = Object.keys(obj1);//?
    let key2 = Object.keys(obj2);//?
  
    let sorted1 = key1.sort(); //?
    let sorted2 = key2.sort(); //?
    
  
    if(sorted1.length !== sorted2.length){
      return false;
    }
  
    for(let val1 of sorted1){
      if(obj1[val1] !== obj2[val1]){ 
        return false; 
      }
    } 
  
    return true;  
  };


  const assertObjectsEqual = function(actual, expected) {
    
    let inspect = require('util').inspect; // this is an important checking tool that uses library inspect
    let val = eqObjects(actual,expected); //?

    if(val === true){
        console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    }
    else{
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`); 
    }

  };


  
const ab = { a: "2", b: "2" }; //?
const ba = { b: "2", a: "2" }; //? 

console.log(assertObjectsEqual(ab,ba)); //?