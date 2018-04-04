let bubbleSort = (myArray, cb) => {

    let iterativeRange = myArray.length - 1;

    while (iterativeRange --) {
        for (let index=0; index<myArray.length - 1; index++) {
            let firstValue = myArray[index];
            let secondValue = myArray[index + 1];

            if (firstValue > secondValue) {
                myArray[index] = secondValue;
                myArray[index + 1] = firstValue;
            }
        }
    }

    return cb(null, myArray);
};

bubbleSort([5, 3, 8, 2, 1, 4], (err, myArray) => {
    if (err) {

    } else {
        console.log(myArray);
    }
});

