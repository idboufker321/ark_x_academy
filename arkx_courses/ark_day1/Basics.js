// //Task 1 :  Warm up
// let firstname = "Brahim";
// let lastname = "idboufker";
// let Pi = 3.14;
// let radius = 10;
// let favoriteSuperhero = "Paulo Coelho";
// let favoriteQuote ="Impossible is just an opinion";

// //Task 2 :  Speed run
// console.log(firstname,lastname);
// let area = Pi*radius**2;            //console.log(area);
// let perimeter = 2*Pi*radius;        //console.log(perimeter);
// let motivation = `A wise man named ${favoriteSuperhero} says: "${favoriteQuote}"`;
// console.log(motivation);

// //Task 3 :  Variable swap
// let a = 3;
// let b = 10;
// console.log("Before swapping: a = ", a, " and b = ", b);
// let x = a;
// a = b;
// b = x;
// // Swap the values of a and b here
// console.log("After swapping: a = ", a, " and b = ", b); // should output: After swapping: a = 10 and b = 3

// if("0"){
//     console.log("hello");
// }

// const numbers = [1, -4, 2, 3, 4, 0, 5, 6, 7, 8];
// const filtered = numbers.filter(n => n > 0);
// console.log(filtered);

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, number) => accumulator * number, 2); // 10

console.log(sum);