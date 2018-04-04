let sieveOfEratosthenes = (range, cb) => {
    let primes = [];

    for (let index=0; index<=range; index++) {
        primes.push(true);
    }

    primes[0] = false;
    primes[1] = false;

    let loopRange = Math.floor(Math.sqrt(range));

    for (let i=2; i<=loopRange; i++) {
        for (let j=i; i*j <= range; j++) {
            primes[i*j] = false;
        }
    }

    return cb(null, primes);
};

sieveOfEratosthenes(1000, (err, primes) => {
    if (err) {

    } else {
        console.log(primes[98]);
    }
});

