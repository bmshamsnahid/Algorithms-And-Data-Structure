let memorizedFibonacci = (index, cache) => {

    cache = cache || [];

    if (cache[index]) {
        return cache[index];
    } else if (index < 3) {
        return 1;
    } else {
        cache[index] = memorizedFibonacci(index - 1, cache) + memorizedFibonacci(index - 2, cache);
    }
    return cache[index];
};

console.log(memorizedFibonacci(15));
