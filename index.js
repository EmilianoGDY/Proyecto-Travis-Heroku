'use strict';

var calculator = require('./app/calculadora');

var a = 5;
var b = 8;

console.log(`Add ${a} + ${b} = ${calculator.add(a,b)}`);
console.log(`Minus ${a} + ${b} = ${calculator.minus(a,b)}`);
console.log(`Multiply ${a} + ${b} = ${calculator.multiply(a,b)}`);
console.log(`Divide ${a} + ${b} = ${calculator.divide(a,b)}`);