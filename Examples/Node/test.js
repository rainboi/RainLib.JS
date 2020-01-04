rainLib = require('../../RainLib/RainLib');
console.log(rainLib);


const testArray = rainLib.generation.randomArrayNumbers(10, -100, 100);

const testArrayOfObjects = [
    {
        movie: 'example one',
        description: 'lorem ipsum',
        rating: 5.5,
    },
    {
        movie: 'example one',
        description: 'lorem ipsum',
        rating: 1.9,
    },
    {
        movie: 'example one',
        description: 'lorem ipsum',
        rating: 7,
    },
    {
        movie: 'example one',
        description: 'lorem ipsum',
        rating: 4.2,
    },
    {
        movie: 'example one',
        description: 'lorem ipsum',
        rating: 5.3,
    },
    {
        movie: 'example one',
        description: 'lorem ipsum',
        rating: 5.5,
    },
]

console.log('\nStarting Test Array Of Numbers:', testArray, '\n\n');

console.log('Selection Sort:', rainLib.sort.selection(testArray, true));
console.log('Test Array:', testArray, '\n');

console.log('Bubble Sort:', rainLib.sort.bubble(testArray, true));
console.log('Test Array:', testArray, '\n');

console.log('Recursive Bubble Sort:', rainLib.sort.recursiveBubble(testArray, true));
console.log('Test Array:', testArray, '\n');

console.log('Insertion Sort:', rainLib.sort.insertion(testArray, true));
console.log('Test Array:', testArray);

console.log('\nStarting Test Array Of Objects:', testArrayOfObjects, '\n\n');

console.log('Selection Sort With Key:', rainLib.sort.selection(testArrayOfObjects, true, "rating"));
console.log('Test Array:', testArrayOfObjects, '\n');

console.log('Bubble Sort With Key:', rainLib.sort.bubble(testArrayOfObjects, true, "rating"));
console.log('Test Array:', testArrayOfObjects, '\n');

console.log('Recursive Bubble Sort With Key:', rainLib.sort.recursiveBubble(testArrayOfObjects, true, "rating"));
console.log('Test Array:', testArrayOfObjects, '\n');

console.log('Insertion Sort With Key:', rainLib.sort.insertion(testArrayOfObjects, true, "rating"));
console.log('Test Array:', testArrayOfObjects, '\n');
