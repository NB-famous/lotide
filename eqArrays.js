
const eqArrays = (val1, val2) => 
{

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

module.exports = eqArrays;


/// Test Cases /// 
//console.log(eqArrays([2, 2, 3], [1, 2, 3]));
//console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));


  
  // TEST CODE for assertEqual

  /* console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
  console.log(assertEqual(1, 1));  */
 

