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


  const countOnly = function(allItems, itemsToCount) {

    let storage = [];
    let container = [];
    let i, j = 0;

    //let keys = Object.keys(itemsToCount);
    //console.log(keys);

    for(i = 0; i < allItems.length;  i++){

        if(allItems[i] in itemsToCount){

            
            let val = itemsToCount[allItems[i]];
            if(val){
                storage.push(allItems[i]);
            }
            
        }
             
    }

    let result = Object.assign({}, storage);

    console.log(result);

    //keys.sort();
    //storage.sort();

    //console.log(keys);

   /*  while( i < keys.length && j < storage.length){
        if(keys[i] === storage[j]){
            container.push(keys[i])

            console.log(container);

        }
        else if(keys[i] < storage[j]){
            i += 1;
        }
        else{
            j += 1;
        }

    } */



    //console.log(storage);
    


}

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
//const result2 = countOnly(firstNames, { "Fred": true, "Barima": true, "Tang": false });

/* assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2); */