'use strict';

var calculator = require('./app/calculadora');

v a = 6;
var b = 7;

console.log(`Add ${a} + ${b} = ${calculator.add(a,b)}`);
console.log(`Minus ${a} + ${b} = ${calculator.minus(a,b)}`);
console.log(`Multiply ${a} + ${b} = ${calculator.multiply(a,b)}`);
console.log(`Divide ${a} + ${b} = ${calculator.divide(a,b)}`);