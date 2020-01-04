function insertionSort(array, inDirect = false, key = null) {
    if (inDirect) {
        array = array.slice(0);
    }

    if (key !== null) {
        for (let i = 1; i < array.length; i++) {
            let j = i - 1
            let element = array[i];

            while (j >= 0 && element[key] < array[j][key]) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = element;
        }
    }
    else {
        for (let i = 1; i < array.length; i++) {
            let j = i - 1
            let element = array[i];

            while (j >= 0 && element < array[j]) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = element;
        }
    }


    return array;
}


module.exports = {
    insertionSort,
};