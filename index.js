'use strict';

var calculator = require('./app/calculadora');

var a = 4;
var b = 6;

console.log(`Add ${a} + ${b} = ${calculator.add(a,b)}`);
console.log(`Minus ${a} + ${b} = ${calculator.minus(a,b)}`);
console.log(`Multiply ${a} + ${b} = ${calculator.multiply(a,b)}`);
console.log(`Divide ${a} + ${b} = ${calculator.divide(a,b)}`);