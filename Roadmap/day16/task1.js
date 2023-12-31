let numbers = [1, 2, 3, 4, 5];
function squareNumbers(numbers) {
    return numbers.map(item => item ** 2);
}

function calculateAverage(numbers, callback) {
    return (callback(numbers).reduce((p, c) => p + c) / numbers.length);
}

let result = calculateAverage(numbers, squareNumbers)
console.log(result);