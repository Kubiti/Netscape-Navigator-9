function mergeSortedArray(array1, array2) {
    array1 = array1.concat(array2);
    return array1.sort((a, b) => a - b);
}

console.log(mergeSortedArray([2, 3, 5, 57, 23, 98, 8, 9, 8], [3, 2, 8, 29, 29, 39, 4]))
console.log('boy')