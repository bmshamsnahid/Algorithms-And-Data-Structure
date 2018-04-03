let reverseWords = (myWord, cb) => {
    let reverseWords = '';
    let strArray = myWord.split(" ");

    strArray.forEach(currentString => {
        let stringLength = currentString.length;
        for (let i=stringLength-1; i>=0; i--) {
            reverseWords += currentString[i];
        }
        if (strArray.indexOf(currentString) != strArray.length-1) {
            reverseWords += ' ';
        }
    });

    return cb(null, reverseWords);
};

reverseWords('This is a string of words.', (err, reverseWords) => {
    if (err) {

    } else {
        console.log(reverseWords);
    }
});