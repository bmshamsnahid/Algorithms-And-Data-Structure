let binarySearch = (numArray, myNumber, cb) => {

    let arrayLength = numArray.length;
    let middleIndex = Math.floor(arrayLength/2);

    if (numArray[middleIndex] == myNumber) {
        return cb(null, true);
    } else if (numArray.length <= 1) {
        return cb(null, false);
    } else if(numArray[middleIndex] > myNumber) {
        numArray = numArray.slice(0, middleIndex);
        binarySearch(numArray, myNumber, cb);
    } else if (numArray[middleIndex] < myNumber) {
        numArray = numArray.slice(middleIndex, numArray.length);
        binarySearch(numArray, myNumber, cb);
    }
};

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56, (err, flag) => {
    if (err) {

    } else {
        if (flag) {
            console.log('Number found.');
        } else {
            console.log('Number not found.');
        }
    }
});

