

const assertEqual = function(actual, expected) {

    if (actual !== expected) {
      return `Assertion Failed: 🚩🚩🚩${actual} !== ${expected} 🚩🚩🚩` ;
    } else {
      return `Assertion Passed: 👍👍👍${actual} === ${expected}👍👍👍`;
    }
  };
  

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };





  function findKeyByValue(catg, title){

    for(let key in catg){

        if(catg[key] === title){  // catg[key] value of corresponding value
            title = key; //this is how we get the key
        }
    }
    return title;
    
}

  console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));