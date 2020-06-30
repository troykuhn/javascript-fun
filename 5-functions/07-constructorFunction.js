// let personOne = {
//     name: 'Macy',
//     age: 24,
//     canVote: true,
// }

// let personTwo = {
//     name: 'Nicolas',
//     age: 40,
//     canVote: true,
// }

// let personThree = {
//     name: 'Mike',
//     age: 10,
//     canVote: false,
// }

function Person (name, age, canVote){
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

let personOne = new Person('Macy', 24, true);
console.log(personOne.age);