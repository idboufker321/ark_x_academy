// Bubble Sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j+1]
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  
        }
      }
    }
    return arr;
  }
  
  // Selection Sort
  function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Swap arr[i] and arr[minIndex]
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
  }
  
  // Insertion Sort
  function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }
  
  // Linear Search
  function linearSearch(arr, target) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return null;
  }
  
  // Binary Search
  function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return null;
  }
  
  // Example usage and testing
  const unsortedArray = [64, 25, 12, 22, 11];
  const sortedArray = [11, 12, 22, 25, 64];
  const targetElement = 22;
  
  console.log("Bubble Sort:", bubbleSort([...unsortedArray]));
  console.log("Selection Sort:", selectionSort([...unsortedArray]));
  console.log("Insertion Sort:", insertionSort([...unsortedArray]));
  
  console.log("Linear Search:", linearSearch([...sortedArray], targetElement));
  console.log("Binary Search:", binarySearch([...sortedArray], targetElement));