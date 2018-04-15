function printBox (width, height) {
    var topbottom = '*'.repeat(width);
    var sides = '*' + ' '.repeat(width-2) + '*';
    console.log(topbottom);
    for(let i = 0; i < height -2 ; i ++) {
        console.log(sides);
    }
    console.log(topbottom);
}

printBox(6, 4);