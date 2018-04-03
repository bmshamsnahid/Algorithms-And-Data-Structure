let getMean = (myArray) => {
    let sum = 0;
    myArray.forEach(number => sum += number);
    return sum/myArray.length;
};

let getMedian = (myArray) => {
    myArray.sort((a, b) => a - b);

    let arrayLength = myArray.length;

    if (arrayLength % 2 != 0) {
        return myArray[parseInt(arrayLength / 2)];
    } else {
        return (myArray[arrayLength/2] + myArray[(arrayLength/2) - 1]) / 2;
    }
};

let getMode = (myArray) => {
    let myMap = {};
    let mode = [], frequency = -1;
    myArray.forEach((number) => {
        if (!myMap[number]) {
            myMap[number] = 0;
        }
        myMap[number]++;
    });

    for (let num in myMap) {
        if (myMap[num] >= frequency) {
            if (myMap[num] == frequency) {
                mode.push(num);
            } else {
                frequency = myMap[num];
                mode = [];
                mode.push(num);
            }
        }
    }
    return mode;
};

let getMeanMedianMode = (myArray, cb) => {
    let myObject = {
      mean: getMean(myArray),
      median: getMedian(myArray),
      mode: getMode(myArray)
    };
    return cb(null, myObject);
};


getMeanMedianMode([1, 2, 3, 4, 5, 4, 6, 1], (err, myObject) => {
    if (err) {

    } else {
        console.log(myObject);
    }
});


