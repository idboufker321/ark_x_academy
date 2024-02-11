/*
Guys, good evening. Since today was just an intro to NodeJS, it is good for you to try and solve the following exercise to solidify 
your knowledge in modules and asynchronous programming. The exercise is to transform this CSV file into a JSON file containing 
an array of cities, each city is an object having the keys as the column titles and the values as the corresponding values for each 
city. Have fun !
*/

const csvtojson = require('csvtojson');
const fs = require('fs');

// Function to convert CSV to JSON
function convertCSVtoJSON(csvFilePath, jsonFilePath) {
  // Create a read stream from the CSV file
  const csvReadStream = fs.createReadStream(csvFilePath);

  // Create a write stream for the JSON file
  const jsonWriteStream = fs.createWriteStream(jsonFilePath);

  // Use csvtojson library to convert CSV to JSON
  csvReadStream
    .pipe(csvtojson({
      // Specify custom delimiter if needed (default is ',')
      delimiter: '\t' // Assuming tab-delimited, you may need to adjust this
    }))
    .pipe(jsonWriteStream)
    .on('done', (error) => {
      if (error) {
        console.error('Error converting CSV to JSON:', error);
      } else {
        console.log('Conversion completed successfully!');
      }
    });
}

// Example usage
const csvFilePath = 'worldcities.cvt'; // Replace with your CVT file path
const jsonFilePath = 'output.json'; // Replace with desired output JSON file path

convertCSVtoJSON(csvFilePath, jsonFilePath);
