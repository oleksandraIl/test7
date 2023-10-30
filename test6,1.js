const factorial = function fan(n) {
    return n < 2 ? 1 : n * fan(n - 1);
};

console.log(factorial(4))
