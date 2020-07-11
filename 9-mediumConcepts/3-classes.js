// function Person (name, age, canVote){
//     this.name = name;
//     this.age = age;
//     this.canVote = age >= 18;
// }

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        this.canVote = age >= 18;
    }

    greeting () {
        return `Hello, my name is ${this.name}`;
    }
}

let testing = (abc, bak) => 23 * abc / bak;

let myResult = `The answer is: ${testing(12, 55)}`;
console.log(myResult);