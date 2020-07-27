
const tail = (val1) => {
  return val1.slice(-val1.length + 1); // -val1.length = -4 -> equivalent to val1[0] -> adding a plus 1 will move it to val1[1] thus filtering it from there.
};

module.exports = tail;


//Test Code // 

//console.log(tail(["Hello", "Lighthouse", "Labs", "Nick"]));
//console.log(tail(["Hello"]));
console.log(tail([1,2,3]));
