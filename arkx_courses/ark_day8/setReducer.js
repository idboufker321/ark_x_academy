function setReducer(arr) {
    while (arr.length > 1) {
        arr = arr.reduce((result, num, index, array) => {
            let count = 1;

            // Check if the current element is identical to the next one
            while (index + 1 < array.length && num === array[index + 1]) {
                count++;
                index++;  // Move to the next element inside the while loop
            }

            result.push(count > 1 ? count : 1);
            return result;
        }, []);
    }

    return arr[0];
}

// Example usage:
const inputArray = [2, 4, 4, 6, 2, 1, 1, 5, 6, 7, 8, 8, 8, 8, 9, 0, 1, 1, 5, 4, 4];
const result = setReducer(inputArray);
console.log(result);

/*


*/