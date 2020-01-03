function recursiveBubbleSort(array, inDirect = false, key = null, end = null) {
    if (inDirect) {
        array = array.slice(0);
    }

    if (end === null) {
        end = array.length - 1;
    }

    let sorted = true;

    if (key !== null) {
        for (let i = 0; i < end; i++) {
            if (array[i][key] > array[i + 1][key]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                sorted = false;
            }
        }
    }
    else {
        for (let i = 0; i < end; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                sorted = false;
            }
        }
    }

    if (sorted) {
        return array;
    }
    else {
        return recursiveBubbleSort(array, false, key, end - 1);
    }

}


module.exports = {
    recursiveBubbleSort,
};