function setReducer(arr) {
    // Continue the loop until the array length is greater than 1
    while (arr.length > 1) {
        // Create a new array to store the result
        const result = [];

        // Iterate through the elements of the input array using a for loop
        for (let i = 0; i < arr.length; i++) {
            // Initialize a count variable to track the consecutive identical numbers
            let count = 1;

            // Check if the current element is identical to the next one
            while (i + 1 < arr.length && arr[i] === arr[i + 1]) {
                // Increment the count and move to the next element
                count++;
                i++;
            }

            // Push the count to the result array if it's greater than 1, otherwise push 1
            result.push(count > 1 ? count : 1);
        }

        // Update the input array with the newly created result array
        arr = result;
    }

    // Return the single integer left in the array
    return arr[0];
}

// Example usage:
const inputArray = [2, 4, 4, 6, 2, 1, 1, 5, 6, 7, 8, 8, 8, 8, 9, 0, 1, 1, 5, 4, 4];
const result = setReducer(inputArray);
console.log(result);

/*


*/