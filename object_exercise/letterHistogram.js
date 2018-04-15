function letterHistogram (text) {
    var histogram = {};
    for ( let i = 0; i < text.length; i ++) {
        if (histogram.hasOwnProperty(text[i])) {
            histogram[text[i]] += 1;
        } else {
            histogram[text[i]] = 1;
        }
    }
    console.log(histogram);
}

letterHistogram('bananas');