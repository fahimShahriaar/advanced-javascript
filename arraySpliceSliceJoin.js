let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let slicedPart = arr.slice(0, arr.length/2);
console.log(slicedPart);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let removedPart = arr.splice(arr.length / 2);
console.log('removed part = ' + removedPart);
console.log('array = ' + arr);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let separateArr = arr.join();
console.log(separateArr);