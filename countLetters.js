function countLetters(string){ 
    
    let val = string.split(' ').join("");

    let storage = [];
    
    for(let i in val){
        if(val[i] !== ''){
            storage.push(val[i]);
            //console.log(storage);    
        }
    }
    

    let answer = {};
    console.log(storage);
    for(let i of storage){
      if(answer[i]){
          answer[i]++;
      }
      else{
        answer[i] = 1;
      }

    }
    return answer;
};

console.log(countLetters("lighthouse in the house"));