function nTimes (func, n) {
    for (let i = 0; i < n; i ++) {
        func();
    }
}

nTimes (function() {
    console.log("Hello, world!");
}, 5);