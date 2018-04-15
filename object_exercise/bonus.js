function topTwoLetters (text) {
    var histogram = {};
    for ( let i = 0; i < text.length; i ++) {
        if (histogram.hasOwnProperty(text[i])) {
            histogram[text[i]] += 1;
        } else {
            histogram[text[i]] = 1;
        }
    }
    var histogramArray = Object.entries(histogram);
    histogramArray.sort(function (a, b) {
        return (a[1] > b [1]) ? -1 : ((a[1] < b[1]) ? 1 : 0);
    });
    console.log(histogramArray.slice(0,2));
}

topTwoLetters('bananas');
