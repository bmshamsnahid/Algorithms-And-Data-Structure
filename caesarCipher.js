const caesarCipher = (mainString, num, cb) => {
    console.log(mainString);

    let newString = '', currentIndex, newIndex;

    let myString = mainString.toLowerCase().split('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let index = 0;
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
            newString += alphabet[newIndex].toUpperCase();
        } else {
            newString += alphabet[newIndex];
        }

        index ++;
    });

    cb(newString);
};

caesarCipher('Bqq Mggrgt', -55, (result) => {
    console.log('Result is: ' + result);
});

