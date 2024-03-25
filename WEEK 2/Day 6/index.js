// Importing readFileAsync, writeFileAsync, and processFiles modules
const readFileAsync = require('./readFileAsync.js')
const writeFileAsync = require('./writeFileAsync.js')
const processFiles = require("./processFiles.js");

// Main asynchronous function
async function main() {
  try {
    // Processing files asynchronously by passing an array of file names
    await processFiles(["test1.js", "test2.txt"]);
  } 
  catch (err) {
    // Catching and logging any errors that occur during file processing
    console.log(err);
  }
}
