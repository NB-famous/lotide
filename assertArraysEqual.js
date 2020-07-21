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


const val1 = ["hello", "punk"];
const val2 = ["hello", "punk"];

console.log(assertArraysEqual(val1 , val2))