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


function assertArraysEqual(arr1 , arr2){

    if(eqArrays(arr1, arr2) === true){
        return `Assertion Passed: 👍👍👍` ;
    }
    else{
        return `Assertion Failed: 🚩🚩🚩` ;
    }

} 


    

 function middle(target){

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
 
        
console.log(assertArraysEqual(middle([1]), [])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]


   






