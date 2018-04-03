let reverseArrayInPlace = (myString, cb) => {
    let mainArray = myString.split('');

    let arrayLength = mainArray.length;

    for (let i=0, j=arrayLength-1; i<arrayLength/2; i++, j--) {
        let temp = mainArray[i];
        mainArray[i] = mainArray[j];
        mainArray[j] = temp;
    }

    return cb(null, mainArray);
};

reverseArrayInPlace('12345', (err, manipulatedArray) => {
    if (err) {

    } else {
        console.log(manipulatedArray);
    }
});

