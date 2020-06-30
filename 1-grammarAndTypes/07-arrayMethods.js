let coffee = ['espresso', 'nitro cold brew', 'americano', 'cappuccino', 'frappuccino', 'decaf'];

console.log(coffee[2]);

coffee.pop();

console.log(coffee);

coffee.push('latte');

console.log(coffee);

// Stack (LIFO) stack of pancakes,
// Array.pop()
// Array.push(<item>)

// Queue (FIFO) Line for a movie or rollercoaster
//Array.shift();
//Array.unshift(<item>);

let firstItem = coffee.shift();
console.log(firstItem);
console.log(coffee);

coffee.unshift('instant', 'drip');
console.log(coffee);

console.log(coffee.indexOf('cappuccino'));


// IF index returns something other than -1, keep looking but keep the number that comes back

coffee.forEach((c) => console.log(c));

coffee.forEach((item) => {
    console.log(item.length);
});

let abc = (cb) => {
    console.log('When do I happen');
    cb();
}

let callbacker = () => console.log('I happen at some point.');

abc(() => 5);
callbacker();

function forEach (callbackfn){
    for (let i=0; i<coffee.length; i++){
        let itemToUse = coffee[i];
        let index = i;
        let currentArray = coffee;

        callbackfn(itemToUse, index, currentArray);
    }
}

forEach((item, index, myArray) => {
    console.log(item, index, myArray);
})