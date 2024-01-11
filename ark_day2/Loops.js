// Task 1 : Factorial

function factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
      f *= i;
  }
  return f;
}
let num = 5;
console.log(factorial(num));

num = 5;
f = 1;
i = 1;

do {
    f *= i;
    i++;
} while(i <= num )
console.log('5! = ' + f);

//Task 2 : How many digits ?
var N = 123542;
var count = 0;

while (N !== 0) {
    N = Math.floor(N / 10);  // int result
    count++;
}
console.log("The number of digits = " + count);

// Task 3 :  Time to draw !

const H = 4;
for (let i = 0; i < H; i++) {
  let S1 = ' '.repeat(H - i - 1);
  let etoiles = '*'.repeat(2 * i + 1);
  console.log(S1 + etoiles);
}

let S2 = ' '.repeat(3);
console.log(S2 + '|');