function selection(array, inDirect = false, key = null) {
    if (inDirect) {
        array = array.slice(0);
    }

    let indexOfMin;

    if (key !== null) {
        for (let i = 0; i < array.length - 1; i++) {
            indexOfMin = i;
            let steps = 0;
            for (let j = indexOfMin + 1; j < array.length; j++) {
                if (array[indexOfMin][key] > array[j][key]) {
                    indexOfMin = j;
                }
            }
            [array[i], array[indexOfMin]] = [array[indexOfMin], array[i]];
        }
    }
    else {
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
    }

    return array;
}


module.exports = {
    selection,
};