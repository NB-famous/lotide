// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

    if (actual !== expected) {
      return `Assertion Failed: 🚩🚩🚩${actual} !== ${expected} 🚩🚩🚩` ;
    } else {
      return `Assertion Passed: 👍👍👍${actual} === ${expected}👍👍👍`;
    }
  };

  
  const findKey = function(obj, callback) {

    for(let key in obj){
        if(callback(obj[key])){
            return key;
        }
    }
    return undefined;

}
  



assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2), "noma");//? 

  assertEqual(findKey({
    "Blue Hill": { stars: 1, triangle: 4},
    "Pizza":     { stars: 3, triangle: 6},
    "noma":      { stars: 2, triangle: 5},
    "elBulli":   { stars: 3, triangle: 4},
    "Ora":       { stars: 2, triangle: 6},
    "Akelarre":  { stars: 3, triangle: 4}
  }, x => x.triangle === 6), "noma"); //?