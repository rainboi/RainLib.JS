function bubbleSort(array, inDirect = false, key = null) {
    if (inDirect) {
        array = array.slice(0);
    }

    let sorted;

    if (key !== null) {
        for (let i = 0; i < array.length - 1; i++) {
            if (sorted) {
                break;
            }
            else {
                sorted = true;
            }
            for (let j = 0; j < array.length - 1; j++) {
                if (array[j][key] > array[j + 1][key]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    sorted = false;
                }
            }
        }
    }
    else {
        for (let i = 0; i < array.length - 1; i++) {
            if (sorted) {
                break;
            }
            else {
                sorted = true;
            }
            for (let j = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    sorted = false;
                }
            }
        }
    }

    return array;
}


module.exports = {
    bubbleSort,
};