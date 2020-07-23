
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





const takeUntil = function(array, callback) {

    let i = 0;
    let storage = [];

    while(!callback(array[i])){
        storage.push(array[i]);
        i++;
    }
    return storage; //?

}


 

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);