const assertEqual = require('../assertEqual');
const tail = require('../tail');
const eqArrays = require('../eqArrays');

console.log(assertEqual(eqArrays(tail(["Hello","Lighthouse", "Labs", "Nick"]), ["Lighthouse", "Labs", "Nick"]), true)); // 

