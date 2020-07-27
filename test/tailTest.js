const eqArrays = require('../eqArrays');
const tail = require('../tail');


//const newTestArr = ["Lighthouse", "Labs", "Nick"];//?

//console.log(tail(["Hello", "Lighthouse", "Labs", "Nick"]));
console.log(eqArrays(tail(["Hello","Lighthouse", "Labs", "Nick"]), ["Lighthouse", "Labs", "Nick"])); // 
