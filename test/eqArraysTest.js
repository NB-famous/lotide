const assertEqual = require('../assertEqual');
const tail = require('../tail');
const eqArrays = require('../eqArrays');

console.log(assertEqual(eqArrays(tail(["Hello","Lghthouse", "Labs", "Nick"]), ["Lighthouse", "Labs", "Nick"]), true)); // 

