let arr = [1, 2, 3, 4];
let arrSquare = [];

console.log(arr);

arr.forEach(function(x){
    x = x * x;
    arrSquare.push(x);
})
console.log(arrSquare);

arr.forEach(function(element, index, array) {
    // console.log(element, index, array);
    array[index] = element + 5;
})

console.log(arr);

