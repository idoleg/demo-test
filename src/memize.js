function memize(callback) {
    const memo = {};

    return (...args) => {
        const argsHash = args.join();

        if (!memo[argsHash]) {
            memo[argsHash] = callback(...args);
        }
        return memo[argsHash];
    };
}

module.exports = memize;

// function getFactorial(n, memo) {
//     memo = memo || {};

//     if (memo[n])
//         return memo[n];
//     if (n === 0)
//         return 1;
//     for (let i = 0; i < n; i++)
//         memo[n] = n * getFactorial(n - 1, memo);
//     return memo[n];
// }
