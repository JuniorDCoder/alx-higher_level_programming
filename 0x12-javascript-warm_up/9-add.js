#!/usr/bin/node

const add = (a, b) => a + b;
const firstArg = parseInt(process.argv[2]);
const secondArg = parseInt(process.argv[3]);

console.log(add(firstArg, secondArg));
