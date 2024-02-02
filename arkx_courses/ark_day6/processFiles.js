// Importing writeFileAsync and readFileAsync modules
const writeFileAsync = require("./writeFileAsync");
const readFileAsync = require("./readFileAsync");

// Function to process an array of files asynchronously
function processFiles(...files) {
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      // Reading the file asynchronously
      readFileAsync(file)
        .then((data) => {
          // Converting the data to uppercase
          const read_data = data.toUpperCase();
          // Logging the uppercase data
          console.log(read_data);
          // Writing the uppercase data back to the file asynchronously
          writeFileAsync(file, read_data)
            .then(() => {
              // Logging a success message if writing is successful
              console.log(`${file} has been updated`);
            })
            .catch((err) => {
              // Catching and logging any errors during writing
              console.log(err);
            });
        })
        .catch((err) => {
          // Catching and logging any errors during reading
          console.log(err);
        });
    }
}

// Files to process
const filesToProcess = ['test1.txt', 'test2.txt'];
// Invoking the processFiles function with the specified files
processFiles(...filesToProcess);

// Exporting the processFiles function for use in other modules
module.exports = processFiles;
