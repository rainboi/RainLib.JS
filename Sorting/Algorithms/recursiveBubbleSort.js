function recursiveBubbleSort(array, inDirect = false, end = null) {
    if (inDirect) {
        array = array.slice(0);
    }

    if (end === null) {
        end = array.length - 1;
    }

    let sorted = true;

    for (let i = 0; i < end; i++) {
        if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
            sorted = false;
        }
    }

    if (sorted) {
        return array;
    }
    else {
        return recursiveBubbleSort(array, false, end - 1);
    }

}


if (require.main === module) {
    console.log(process.argv);
}


module.exports = {
    recursiveBubbleSort,
};