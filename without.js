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


function without(test, remove){

    copyOftest = [];

    for(let i = 0; i < test.length; i++){
        copyOftest.push(test[i]);
    }

    let elemRemove = [];
   
    for(let i = 0; i < remove.length; i++){
        for(let j = 0; j < copyOftest.length; j++){
            if(remove[i] === copyOftest[j]){
                elemRemove.push(j);
            }         
        }     
    }

    for( let i = elemRemove.length - 1; i >= 0; i--){
        copyOftest.splice(elemRemove[i], 1);
    }

    return copyOftest;
  

}

//without([3, 1, 3], [1]);
console.log(without([1, 2, 3], [1]));

console.log(without(["1", "2", "3"], [1, 2, "3"]));

console.log(without([5, 4, "3"], [1, 2, "3"]));