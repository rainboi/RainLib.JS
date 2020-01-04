// Folder Structure
const RainLib = require('../../RainLib/RainLib');
// Stand-Alone
// const RainLib = require('../../RainLib');
console.log(RainLib);


const testArray = RainLib.Generation.randomNumbers(10, -100, 100);

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

console.log('\nStarting Test Array Of Numbers:', testArray, '\n');

console.log('\nSelection Sort:', RainLib.Sort.selection(testArray, true));

console.log('\nBubble Sort:', RainLib.Sort.bubble(testArray, true));

console.log('\nRecursive Bubble Sort:', RainLib.Sort.recursiveBubble(testArray, true));

console.log('\nInsertion Sort:', RainLib.Sort.insertion(testArray, true));

console.log('\n\nStarting Test Array Of Objects:', testArrayOfObjects, '\n');

console.log('\nSelection Sort With Key:', RainLib.Sort.selection(testArrayOfObjects, true, "rating"));

console.log('\nBubble Sort With Key:', RainLib.Sort.bubble(testArrayOfObjects, true, "rating"));

console.log('\nRecursive Bubble Sort With Key:', RainLib.Sort.recursiveBubble(testArrayOfObjects, true, "rating"));

console.log('\nInsertion Sort With Key:', RainLib.Sort.insertion(testArrayOfObjects, true, "rating"));
