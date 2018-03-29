const caesarCipher = (mainString, num, cb) => {
    console.log(mainString);
    var newString = '', currentIndex, newIndex;

    myString = mainString.toLowerCase().split('');
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var index = 0;
    myString.map((val) => {
        if (!alphabet.includes(val)) {
            newString += val;
            index++;
            return;
        }

        currentIndex = alphabet.indexOf(val);

        newIndex = (currentIndex + num) % 26;

        if (newIndex < 0) newIndex += 26;

        if (mainString.charAt(index) == val.toUpperCase()) {
            console.log('Uppercase');
            newString += alphabet[newIndex].toUpperCase();
        } else {
            newString += alphabet[newIndex];
        }

        index ++;
    });

    cb(newString);
};

caesarCipher('Zoo Keeper', -1, (result) => {
    console.log('Result is: ' + result);
});

