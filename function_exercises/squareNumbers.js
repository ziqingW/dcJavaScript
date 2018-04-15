function squareNumbers (numbers) {
    var squares = numbers.map(function (num) {
        return num ** 2;
    });
    console.log(squares);
}

squareNumbers([1,2,3]);