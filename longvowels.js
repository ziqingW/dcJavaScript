function longLongVowels (word) {
    var oriWord = word.toLowerCase();
    var vowels = [];
    var changed_word = "";
// # find out how many vowels in word
// # record the vowel in tuple as (vow, index)
// # collect all the vowel tuples in a list
    for ( let i = 0; i < word.length; i ++) {
        let chr = oriWord[i];
        if (["a", "e", "i", "o", "u"].indexOf(chr) > -1) {
            let vowel = [chr, i];
            vowels.push(vowel); 
        }
    }
    var vowels_num = vowels.length;
// # rule 1: if there's only one vowel, and it's at the end of the word,
// # this vowel is long vowel
    if (vowels_num == 1) {
        if (vowels[0][1] == word.length - 1){
            changed_word = word.slice(0, -1) + word[word.length-1].repeat(5);
        }
// # rule 2: if only one vowel as 'i' or 'o',
// # and there are two or more consonants followed, it can be long vowel
        else if (["i", "o"].indexOf(vowels[0][0]) > -1 && vowels[0][1] < word.length - 2) {
        changed_word = word.slice(0, vowels[0][1]) + vowels[0][0].repeat(5) + word.slice((vowels[0][1] + 1));
        } 
        else {
        changed_word = word;
        }
    }
// # rule 3: if there are two vowels, the first vowel is long vowel        
    else if (vowels_num >= 2) {
        if (vowels[0][0] == vowels[1][0] && vowels[0][1] == vowels[1][1] - 1) {
            changed_word = word.slice(0, vowels[0][1]) + vowels[0][0].repeat(5) + word.slice(vowels[1][1] + 1);
        }
        else {
        changed_word = word.slice(0, vowels[0][1]) + vowels[0][0].repeat(5) + word.slice(vowels[0][1] + 1);
        }
    }
    else {
        changed_word = word;
    }
    console.log(changed_word);
}

longLongVowels ('Cra');
longLongVowels ('Cheese');
longLongVowels ('sign');
longLongVowels ('boat');
