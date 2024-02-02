function myPromise(text, alright) {
    return new Promise(function (resolve, reject) {
      alright="0";
      setTimeout(function () {
        if (alright) resolve(text);
        else reject("Encountered an error");
      }, 2000);
    });
  }
  
  // Call the myPromise function with "Hello" as the text and true as the alright value.
  // This returns a Promise that will resolve after 2 seconds with the value "Hello".
  myPromise("Hello", true)
    // The .then method is called on the Promise. This schedules a function to be run when the Promise is resolved.
    // The resolved value of the Promise ("Hello") is passed to this function.
    .then(function (value) {
      // Log the resolved value ("Hello") to the console.
      console.log(value);
      // Return another Promise by calling the myPromise fun ction with "World" as the text and true as the alright value.
      // This Promise will resolve after 2 seconds with the value "World".
      return myPromise("World", true);
    })
    // The .then method is called on the Promise returned by the previous .then method.
    // This schedules a function to be run when the Promise is resolved.
    // The resolved value of the Promise ("World") is passed to this function.
    .then(function (value) {
      // Log the resolved value ("World") to the console.
      console.log(value);
    })
    // The .catch method is called on the Promise. This schedules a function to be run if any Promise in the chain is rejected.
    // The reason for the rejection is passed to this function.
    .catch(function (error) {
      // Log the error message to the console.
      console.log(error);
    })
    // The .finally method is called on the Promise. This schedules a function to be run when the Promise is settled, whether it was fulfilled or rejected.
    // This is typically used for cleanup operations.
    .finally(function () {
      // Log the string "Promise completed" to the console.
      console.log("Promise completed");
    });



/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// function maskify(s) {
//     return '#'.repeat(Math.max(0, s.length - 4)) + s.slice(-4);
// }

// // Examples
// console.log(maskify("4556364607935616"));  // Output: "############5616"
// console.log(maskify("64607935616"));       // Output: "#######5616"
// console.log(maskify("1"));                 // Output: "1"
// console.log(maskify(""));                  // Output: ""
// console.log(maskify("Skippy"));            // Output: "##ippy"
// console.log(maskify("Nananananananananananananananana Batman!"));  // Output: "####################################man!"

// console.log("a");
// setTimeout(function (){
//     console.log("b");
// }, 2000); 
// console.log("c");

// const readline = require('readline');

// // Create an interface for reading input
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Ask a question and handle the answer using a callback
// function askQuestion(question, callback) {
//   rl.question(question, (answer) => {
//     callback(answer); // Execute the callback with the user's answer
//   });
// }

// // Usage example
// askQuestion("What's your name? ", function (name) {
//   console.log(`Hello, ${name}!`);
//   rl.close(); // Close the Readline interface
// });


// const myPromise = new Promise(function (resolve, reject) {
//     const alright = true;
//         setTimeout(function () { 
//             if (alright) resolve("Everything went well");
//             else reject("Encountered an error");
//         }, 2000)
//     }); 

// console.log("1");
// myPromise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("Promise completed");
//   });
// console.log("2");
// // output: 
// // 1
// // 2
// // Everything went well
// // Promise completed