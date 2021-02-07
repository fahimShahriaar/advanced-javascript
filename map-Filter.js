let numbers = [1, 2, 3, 4, 5];

//  --------- array.map() -----------
// let numbersSquare = numbers.map(function (element) {
//     return element * element;
// })

// console.log(numbersSquare);


// -------- array.filter() ---------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredArray = arr.filter(function(element) {
//     return element % 2 == 0;
// })
// console.log(filteredArray);



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenArr = arr.filter(element => element % 2 == 0);
// console.log(evenArr);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrSquare = arr.map(element => element * 2);
console.log(arrSquare);