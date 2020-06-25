let i = 7; 

//For loop controller ie(1; 2; 3;)
//position1: Variable declaration and/or initialization
//position2: Condition
//position3: Incrementation or Change (to allow the condition to fail)

for (i = 0; i < 10; i++){
    console.log('nice');
    // increment i
    // verify conditional (hop up if true, leave loop if false)
};

let j = [];

for (let j = 0; j <= 20; j+=2) {
   console.log(j);
    
}

console.log(j);

for (let i = 10; i >= 0; i--) {
    console.log(i);
    
}

let name = "Troy";
let pCharacter = name[0];

for (let character = 0; character < name.length; character++) {
    console.log(name[character]);
    
}

//Same as above
for (let c of name) {
    console.log(c);
}

let invoice = [3.1, 4.1, 89.98, 3.50];
let total = 0;

for (let i = 0; i < invoice.length; i++) {
    total = total + invoice[i];
    
}
console.log(total);