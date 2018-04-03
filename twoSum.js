let twoSum = (myArray, sum, cb) => {
    let twoSumArr = [];
    console.log(myArray);

    for (let i=0; i<myArray.length; i++) {
        for (let j=i+1; j<myArray.length; j++) {
            if (i == j) continue;
            if (myArray[i] + myArray[j] == sum) {
                let newArray = [myArray[i], myArray[j]];
                twoSumArr.push(newArray);
            }
        }
    }

    cb(null, twoSumArr);
};

twoSum([1, 6, 4, 5, 3, 3], 7, (err, twoSumArray) => {
    if (err) {

    } else {
        console.log(twoSumArray);
    }
});

