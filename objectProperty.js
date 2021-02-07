const students = [
    { age: 31, name: 'Manna' },
    { age: 41, name: 'Tom' },
    { age: 90, name: 'Scarlet' }
]

// let names = students.map(function(element, i, arr) {
//     return element.name;
// })

let names = students.map(element => element.name);
console.log(names);

let ages = students.map(x => x.age);
console.log(ages);

let upper40 = students.filter(x => x.age > 40);
console.log(upper40);