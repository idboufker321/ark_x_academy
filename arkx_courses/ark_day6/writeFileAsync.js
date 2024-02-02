// Importing the fs module for file system operations and readFileAsync module
const fs = require("fs");
const readFileAsync = require("./readFileAsync")

// Function to write content to a file asynchronously
function writeFileAsync(filePath, content) {
    return new Promise((resolve, reject) => {
      // Reading the existing content of the file asynchronously
      readFileAsync(filePath)
        .then((data) => {
          // Combining the existing content with the new content
          const combinedContent = data + content;
          // Writing the combined content back to the file asynchronously
          fs.writeFile(filePath, combinedContent, "utf8", (err) => {
            if (err) return reject(err.message);
            else resolve(`"${filePath}" written successfully`);
          });
        })
        .catch((err) => reject(err));
    });
  }

// Writing content to test1.txt file asynchronously
writeFileAsync("test1.txt", "content of test1.txt file")
  .then((message) => console.log("Message : ", message))
  .catch((err) => console.log("Error : ", err.message));

// Writing content to test2.txt file asynchronously
writeFileAsync("test2.txt", "content of test2.txt file")
  .then((message) => console.log("Message : ", message))
  .catch((err) => console.log("Error : ", err.message));

// Exporting the writeFileAsync function for use in other modules
module.exports = writeFileAsync;