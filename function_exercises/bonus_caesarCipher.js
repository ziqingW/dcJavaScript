function cipher(text) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var result = '';
  result = text.split("").map(function (letter) {
    let idx = alphabet.indexOf(letter.toUpperCase());
    let newIdx = idx + 13;
    if (newIdx >= alphabet.length) {
        newIdx -= 26;
    }
    return alphabet[newIdx];
  });
  return result.join("");
}

// You can assume that the text is only one word, all letters are capitalized, and the offset is always 13
var encrypted = cipher('GENIUS');

console.log(encrypted);