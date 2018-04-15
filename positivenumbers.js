function positiveNumbers (numbers) {
    var positiveArray = numbers.filter(function (num) {
        return num > 0;
    });
    console.log(positiveArray);
}

positiveNumbers([1, 2, 5, 0]);
positiveNumbers([1, -3, 5, -3, 0]);
positiveNumbers([-1, -3, -3]);