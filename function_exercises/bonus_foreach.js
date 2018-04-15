function myForEach (arr, fun) {
    for (let i = 0; i < arr.length; i ++) {
        fun(arr[i]);
    }
}

myForEach([
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }
], function(person) {
    console.log("Hello, " + person.name + "!");
});