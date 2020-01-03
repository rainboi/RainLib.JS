const rainLib = {

    generation: {
        randomArrayNumbers: function (length, minValue = -10, maxValue = 10) {
            const result = [];

            for (let i = 0; i < length; i++) {
                let randomNumber = ((Math.random() * (maxValue - minValue + 1)) << 0) + minValue;
                result.push(randomNumber);
            }

            return result;
        },
    },

    sort: {
        selectionSort: function (array, inDirect = false) {
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
        },

        bubbleSort: function (array, inDirect = false) {
            if (inDirect) {
                array = array.slice(0);
            }

            let sorted;

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

            return array;
        },

        recursiveBubbleSort: function (array, inDirect = false, end = null) {
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

        },
    }

}

console.log(rainLib);