function myMap (arr, func) {
    var newArray = [];
    for (let i = 0; i < arr.length; i ++) {
        newArray.push(func(arr[i]));
    }
    return newArray;
}

console.log(myMap([
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }
], function(person) {
    return "Hello, " + person.name + "!";
}));
