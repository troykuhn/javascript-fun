let arrayOne = ['a', 'b', 'c'];
let arrayTwo = ['d', 'e', 'f'];

// for (let item of arrayTwo) {
//     arrayOne.push(item);
// }

// console.log(array1);

// arrayOne.concat(arrayTwo);

console.log(...['Troy']);
console.log('Troy');

arrayOne = [...arrayOne, ...arrayTwo ];
console.log(arrayOne);

let personOne = {
    name: 'Smokey Bear',
    outfit: 'Bear Costume',
}

let bearAttributes = {
    danger: 'RED',
    hunger: '10',
}

for (let something in bearAttributes){
    personOne[something] = bearAttributes[something];
}

personOne = {
    ...personOne,
    ...bearAttributes
}

console.log(personOne);