// function leetspeak (text) {
//     var leetResult = text.replace(/a/gi, 4).replace(/e/gi, 3).replace(/g/gi, 6).replace(/l/gi, 1).replace(/o/gi, 0).replace(/s/gi, 5).replace(/t/gi, 7);
//     console.log(leetResult);
// }

// leetspeak('Leet');

function leetspeak (text) {
    var charArray = ['a', 'e', 'g', 'l', 'o', 's', 't'];
    var numArray = [4, 3, 6, 1, 0, 5, 7];
    var leetResult = text;
    for ( let i = 0; i < charArray.length; i++) {
        leetResult = leetResult.replace(new RegExp(charArray[i], 'gi'), numArray[i]);
    }
    console.log(leetResult);
}

leetspeak('Leet');