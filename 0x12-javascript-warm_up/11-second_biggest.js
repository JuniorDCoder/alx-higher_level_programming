#!/usr/bin/node

const args = process.argv.slice(2).map(Number);
const findSecondBiggest = (arr) => {
	if (arr.length < 2) return 0;
	const uniqueValues = [...new Set(arr)];
	uniqueValues.sort((a, b) => b - a);

	return uniqueValues[1] || 0;
};

console.log(findSecondBiggest(args));
