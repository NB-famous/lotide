const assertEqual = function(actual, expected) {

    if (actual !== expected) {
      return `Assertion Failed: 🚩🚩🚩${actual} !== ${expected} 🚩🚩🚩` ;
    } else {
      return `Assertion Passed: 👍👍👍${actual} === ${expected}👍👍👍`;
    }
  };



  function eqArrays(val1, val2){
    if(val1.length !== val2.length){
        return false;
    }
    

    for(let i = 0; i < val1.length; i++){
              

        if(val1[i] !== val2[i]){
            return false;
        }
            
    }

    return true;       
}


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

    //console.log(key1);   
};




// TEST CODE //

const ab = { a: "1", b: "2" }; //?
const ba = { b: "2", a: "1" }; //? 
console.log(eqObjects(ab, ba)); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true */

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false


console.log(assertEqual(eqObjects(cd, cd2),true ));

console.log(eqArrays(eqObjects(cd, cd2),true ));