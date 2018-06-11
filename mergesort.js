//If the list is of length 0 or 1, then it is already sorted. Otherwise:
//Divide the unsorted list into two sublists of about half the size.
//Sort each sublist recursively by re-applying merge sort.
//Merge the two sublists back into one sorted list.

// create split function that splits in half

function split(arr) {
    let mid = Math.floor(arr.length / 2);
    // e.g. length = 7, mid = 3
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return [left, right];
}

function merge(arr1, arr2) {
    let newArr = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            newArr.push(arr1.shift());
        } else {
            newArr.push(arr2.shift());
        }
    }

    return newArr.concat(arr1).concat(arr2);
}

function mergeSort(arr) {
    //base case;
}

let arr1 = [1, 2, 3];
let arr2 = [6, 7];

let mArray = [5, 8, 2, 6, 0, 9, 2, 6, 1, 3];
