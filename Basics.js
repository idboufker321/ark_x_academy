//Task 1 :  Warm up
let firstname = "Brahim";
let lastname = "idboufker";
let Pi = 3.14;
let radius = 10;
let favoriteSuperhero = "Paulo Coelho";
let favoriteQuote ="Impossible is just an opinion";

//Task 2 :  Speed run
console.log(firstname,lastname)
let area = Pi*radius**2;
let perimeter = 2*Pi*radius;
let motivation = `A wise man named ${favoriteSuperhero} says: "${favoriteQuote}"`;
console.log(motivation);

//Task 3 :  Variable swap
let a = 3;
let b = 10;
console.log("Before swapping: a = ", a, " and b = ", b);
let x = a;
a = b;
b = x;
// Swap the values of a and b here
console.log("After swapping: a = ", a, " and b = ", b); // should output: After swapping: a = 10 and b = 3