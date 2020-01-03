function selectionSort(array, inDirect = false) {
    if (inDirect) {
        array = array.slice(0);
    }

    let indexOfMin;

    for (let i = 0; i < array.length - 1; i++) {
        indexOfMin = i;
        let steps = 0;
        for (let j = indexOfMin + 1; j < array.length; j++) {
            if (array[indexOfMin] > array[j]) {
                indexOfMin = j;
            }
        }
        [array[i], array[indexOfMin]] = [array[indexOfMin], array[i]];
    }

    return array;
}


if (require.main === module) {
    console.log(process.argv);
}


module.exports = {
    selectionSort,
};