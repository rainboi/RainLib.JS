const RainLib = {


    Generation: {
        randomNumbers: function (length, minValue = -10, maxValue = 10) {
            const result = [];

            for (let i = 0; i < length; i++) {
                let randomNumber = ((Math.random() * (maxValue - minValue + 1)) << 0) + minValue;
                result.push(randomNumber);
            }

            return result;
        },
    },


    Sort: {

        selection: function (array, inDirect = false, key = null) {
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
        },

        bubble: function (array, inDirect = false, key = null) {
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
        },

        recursiveBubble: function (array, inDirect = false, key = null, end = null) {
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
                return this.recursiveBubble(array, false, key, end - 1);
            }

        },

        insertion: function (array, inDirect = false, key = null) {
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

    }


}

if (require && require.main === module) {
    console.log(rainLib);
}

module.exports = {
    Generation: RainLib.Generation,
    Sort: RainLib.Sort,
}