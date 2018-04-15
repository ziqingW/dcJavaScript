function sumArray (numbers) {
    return numbers.reduce(function (a,b) {
        return a + b;
    });
}

console.log(sumArray([1, 2, 3]));