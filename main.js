randomArray = require('./Generations/randomArray').randomArray;
sort = require('./sort');
console.log("SORT", sort);


const testArray = randomArray(10, -100, 100);

console.log('\nStarting Test Array:', testArray, '\n\n');

console.log('Selection Sort:', sort.selection(testArray, true));
console.log('Test Array:', testArray, '\n');

console.log('Bubble Sort:', sort.bubble(testArray, true));
console.log('Test Array:', testArray, '\n');

console.log('Recursive Bubble Sort:', sort.recursiveBubble(testArray, true));
console.log('Test Array:', testArray);
