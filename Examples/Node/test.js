rainLib = require('../../RainLib/RainLib');
console.log(rainLib);


const testArray = rainLib.generation.randomArrayNumbers(10, -100, 100);

console.log('\nStarting Test Array:', testArray, '\n\n');

console.log('Selection Sort:', rainLib.sort.selection(testArray, true));
console.log('Test Array:', testArray, '\n');

console.log('Bubble Sort:', rainLib.sort.bubble(testArray, true));
console.log('Test Array:', testArray, '\n');

console.log('Recursive Bubble Sort:', rainLib.sort.recursiveBubble(testArray, true));
console.log('Test Array:', testArray);
