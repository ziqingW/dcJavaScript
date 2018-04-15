function wordHistogram (text) {
    var wordArray = text.split(" ");
    var histogram = {};
    for (let i = 0; i < wordArray.length; i ++) {
        if (histogram.hasOwnProperty(wordArray[i])) {
            histogram[wordArray[i]] ++;
        } else {
            histogram[wordArray[i]] = 1;
        }
    }
    console.log(histogram);
}

wordHistogram('to be or not to be');