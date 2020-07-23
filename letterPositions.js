const letterPositions = function(sentence) {

    let val = sentence.split(' ').join("");
    const results = {};
    for(let i = 0; i < val.length; i++){
        //val[i];
        //console.log(val[i]);
        //results[val[i]];
        //console.log(results[val[i]]);
        if(!results[val[i]])   // create to check the object if theres anything inside
        {    
            results[val[i]] = []; // this creates an array at the location
              
        }
        results[val[i]].push(i); // that location is then push inside the object.
  
    }
    
    // logic to update results here
    return results;

  };

console.log(letterPositions("lighthouse in the house"));

