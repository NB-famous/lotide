//const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

console.log(assertArraysEqual(tail(["Hello" , "Lghthouse" , "Labs", "Nick"]), ["Lighthouse", "Labs", "Nick"]));