// it take more time
function sumOfAll1(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) { // O(n)
        total += i
    }
    return total;
}

// faster
function sumOfAll2(n) {
    return n * (n + 1) / 2 // O(1)
}

console.log(sumOfAll2(10))

// if the fun run n times then it's 0(n)
