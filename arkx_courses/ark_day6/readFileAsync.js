// Importing the fs module for file system operations
const fs = require("fs");

// Function to read the content of a file asynchronously
function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    // Reading the file content asynchronously
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) return reject(err.message);
      else resolve(data);
    });
  });
}

// Reading content from test1.txt file asynchronously
readFileAsync('test1.txt')
  .then((data) => console.log('Content : ', data))
  .catch((err) => console.log('Error : ', err));

// Exporting the readFileAsync function for use in other modules
module.exports = readFileAsync;