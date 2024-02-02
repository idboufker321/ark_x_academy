//BUBBLE SORT
list = [11, 2, 14, 25, 31, 83, -72];

function bubbleSort(list) {
    let swapped = true;
    while (swapped == true) {
        swapped = false;
        for (let i = 0; i < list.length - 1; i++) {
            if (list[i] > list[i + 1]) {
                let temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
                swapped = true;
            }
        }
    }
    return list;
}
console.log(bubbleSort(list));


//LINEAR SEARCH
let source = [11, 2, 14, 25, -31, 83, 72];
let value = 72;

function linearSearch(source, value) {
    for (let i = 0; i < source.length; i++) {
        if (source[i] === value) {
            return i;
        }
    }
    return null;
}
//console.log(linearSearch(source, value));

//BINARY SEARCH
let src = [10,15,24,26,58,70];
let val = 15;
function binarySearch(src, target) {
    let left = 0;
    let right = src.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (src[middle] === target) {
            return middle;
        } else if (src[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return null;
}
console.log(binarySearch(src, val));