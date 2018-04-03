const isPalindrome = (word, cb) => {
    const arr = word.toLowerCase().split(''),
        validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var wordArr = [];

    wordArr = arr.filter((val) => {
        if (validCharacters.includes(val)) return val;
    });

    var length = wordArr.length;

    for(let index1=0, index2=length-1; index1 < (length/2); index1++, index2--) {
        if (wordArr[index1] == ' ' || validCharacters.includes(wordArr[index1]) == false ) {
            index1++;
        } else if (wordArr[index2] == ' ' || validCharacters.includes(wordArr[index2]) == false) {
            index2--;
        }
        if (wordArr[index1] != wordArr[index2]) return cb(false);
    }
    cb(true);
};

isPalindrome("Madam I'm Adam", (isPalindrome) => {
    if (isPalindrome == true) console.log('True');
    else console.log('False');
});

