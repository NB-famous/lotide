// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

    if (actual !== expected) {
      return `Assertion Failed: 🚩🚩🚩${actual} !== ${expected} 🚩🚩🚩` ;
    } else {
      return `Assertion Passed: 👍👍👍${actual} === ${expected}👍👍👍`;
    }
  };
  
/*   console.log(assertEqual);
  
  // TEST CODE
  console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
  console.log(assertEqual(1, 1)); 
 */

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


//console.log(eqArrays([2, 2, 3], [1, 2, 3]));


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));

