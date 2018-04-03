let fibonacciNumber = (position, cb) => {
    let myNumber = fibonacci(position);
    return cb(null, myNumber);
};

let fibonacci = (position) => {
    if (position < 3) {
        return 1;
    } else {
        return fibonacci(position - 1) + fibonacci(position - 2);
    }
};

fibonacciNumber(9, (err, output) => {
    if (err) {

    } else {
        console.log(output);
    }
});

