//Task 1 : Even or Odd
let number = 11;
if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

//Task 2 :  Days of the week
let day = 4;;

switch (day){
    case 1 :
        console.log("monday");
        break;
    case 2 :
        console.log("tuesday");
        break;
    case 3 :
        console.log("Wednsday");
        break;
    case 4 :
        console.log("friday");
         break;
    case 5 :
         console.log("friday");
         break;
    case 6 :
        console.log("friday");
         break;
    case 7 :
    console.log("sunday");
    break;

        default : console.log("Invalid");
}

//Task 3 : Maximum 

let A = -15;
let B = 6;
let C = 2.6;

let maxNum = Math.max(A,B,C);
console.log("the max number = ",maxNum);

//Task 4 : The Teacher

let score = 83;

if (score > 85) {
    console.log("A");
} else if (score > 70 && score <= 85) {
    console.log("B");
} else if (score > 55 && score <= 70) {
    console.log("C");
} else if (score > 40 && score <= 55) {
    console.log("D");
} else if (score > 15 && score <= 40) {
    console.log("E");
} else if (score <= 15) {
    console.log("F");
} else {
    console.log("Invalid");
}