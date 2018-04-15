function evenNumbers (numbers) {
    var evens = numbers.filter(function (num) {
        return num % 2 == 0;
    });
    console.log(evens);
}

evenNumbers ([12,43,65,32,3,644,75,2,34,87,56,922]);