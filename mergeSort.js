let sorting = (myArray, cb) => {
    let result =  mergeSort(myArray);
    return cb(null, result);
};

let mergeSort= (myArray) => {
    if (myArray.length < 2) return myArray;
    let middleIndex = Math.floor(myArray.length/2);

    let firstHalf = myArray.slice(0, middleIndex);
    let secondHalf = myArray.slice(middleIndex, myArray.length);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};

let merge = (myArray1, myArray2) => {
    let result = [];

    while (myArray1.length && myArray2.length) {
        let minimumElement;
        if (myArray1[0] < myArray2[0]) {
            minimumElement = myArray1.shift();
        } else {
            minimumElement = myArray2.shift();
        }
        result.push(minimumElement);
    }

    if (myArray1.length) {
        result = result.concat(myArray1);
    } else {
        result = result.concat(myArray2);
    }

    return result;
};

sorting([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1], (err, sortedArray) => {
    if (err) {

    } else {
        console.log(sortedArray);
    }
});