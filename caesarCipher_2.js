function caesarCipher (text , offset=false) {
    if (offset) {
        var chaArray = [];
        var cipher = "";
        for (let i = 0; i < text.length; i ++) {
            let charCode = text.charCodeAt(i);
            if (charCode != 32) {
                if (charCode <= 77) {
                    charCode += 13;
                } else if (charCode > 77 && charCode <= 90) {
                    charCode -= 13;
                } else if (charCode >= 97 && charCode <= 109) {
                    charCode += 13;
                } else {
                    charCode -= 13;
                }
            }
            chaArray.push(charCode);
        }
        for (let j = 0; j < chaArray.length; j ++) {
            cipher += String.fromCharCode(chaArray[j]);
        }
        console.log(cipher);
    }
    else {
        console.log(text);
    }
}

caesarCipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 1);