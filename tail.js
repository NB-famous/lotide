/* function tail (val1){
    let result = val1[val1.length -1];
    return result;
} */


const tail = function(val1) {
  return val1.slice(-val1.length + 1);
};

console.log(tail(["Hello", "Lighthouse", "Labs"]));