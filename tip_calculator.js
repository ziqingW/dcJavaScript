function tipAmount (bill, service) {
    var rank = 0;
    if (service == "good") {
        rank = 0.2;
    } else if (service == "fair") {
        rank = 0.15;
    } else if (service == "bad") {
        rank = 0.1;
    }
    var tip = bill * rank;
    return tip;
}
console.log(tipAmount(100, 'good'));
console.log(tipAmount(40, 'fair'));