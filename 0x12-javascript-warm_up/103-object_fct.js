#!/usr/bin/node

const myObject = {
	type: 'object',
	value: 12,
	incr: function () {
		this.value += 1;
	}
};

console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);
