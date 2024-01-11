//Task 1

function sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
function countEven(numbers) {
    return numbers.filter(num => num % 2 === 0).length;
}
function double(numbers) {
    return numbers.map(num => num * 2);
}

//Task 2
function sockMerchant(socks) {
    const sockCount = {};
    let pairs = 0;

    socks.forEach(sock => {
        if (!sockCount[sock]) {
            sockCount[sock] = 1;
        } else {
            sockCount[sock]++;
            if (sockCount[sock] % 2 === 0) {
                pairs++;
            }
        }
    });

    return pairs;
}

// Here are some test cases :
sockMerchant([1, 2, 1, 2, 1, 3, 2]); // 2
console.log(sockMerchant());

sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]); // 3
console.log(sockMerchant());

sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]); // 4
console.log(sockMerchant());

sockMerchant([1, 2, 3, 4, 5, 6, 7, 8, 9]); // 0
console.log(sockMerchant());

// let array = ["brahim" , 12345 , false , ["idboufker" , "casa"]];

// console.log(`hello ${array[0]} ${array[3]} your ID is ${array[1]}`);

// array.push("test push");
// console.log(array);
// array.pop();
// console.log(array);
// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// } // displays: 'brahim', 12345, false, [ 'idboufker', 'casa' ]

// console.log(`hello ${array[0]} ${array[3][0]} ${array[3][1]} your ID is ${array[1]}`);
// console.log(`hello ${array[3]}`);