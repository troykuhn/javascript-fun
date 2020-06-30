let num = 6;

//Ternary    (condition) ? (true) : (false);

num > 0 ? console.log('yay') : console.log('nay');

(num > 0 ) ? console.log('yay') : console.log('nah');

if (num > 0){
    console.log('yes');
} else {
    console.log('nah.');
}


let age = 17;

(age >= 25)
? console.log("You can rent a car.")
: (age >= 21)
? console.log('Yay you can drink')
: (age >= 18)
? console.log("Yay you can vote.")
: console.log("Sorry you're too young.");

// for-in : Uses any kind of collection (obj,  array, string)
// for-of : Uses ITERABLE collections (array, string, etc.)