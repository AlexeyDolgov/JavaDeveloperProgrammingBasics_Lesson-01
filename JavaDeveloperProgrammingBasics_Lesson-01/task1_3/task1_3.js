let a = 2;

let x = 1 + (a *= 2);

// x = 1 + (a = a * 2) = 1 + (a = 2 * 2) = 1 + 4 = 5

console.log(x);