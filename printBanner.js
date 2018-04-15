function printBanner (text) {
    var contentLane = '*' + ' ' + text + ' ' + '*';
    var number = contentLane.length;
    var topBottom = '*'.repeat(number);
    console.log(topBottom);
    console.log(contentLane);
    console.log(topBottom);
}

printBanner('Welcome to DigitalCrafts');