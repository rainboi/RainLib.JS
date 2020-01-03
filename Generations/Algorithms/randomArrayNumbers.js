function randomArrayNumbers(length, minValue = -10, maxValue = 10) {
    const result = [];

    for (let i = 0; i < length; i++) {
        let randomNumber = ((Math.random() * (maxValue - minValue + 1)) << 0) + minValue;
        result.push(randomNumber);
    }

    return result;
}


if (require.main === module) {
    console.log(process.argv);
}


module.exports = {
    randomArrayNumbers,
};