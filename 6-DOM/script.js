console.log('LOADED FILE!');


let myPtag = document.getElementById('testParagraph');
myPtag.style.color = 'blue';

console.log(document.querySelectorAll('p.sampleClass'));

document.querySelectorAll('p.sampleClass')[0].innerText = 'My text has changed';

let toChange = document.querySelectorAll('p.sampleClass');

toChange.forEach(tag => {
    tag.innerHTML = '<h1>Hendrix</h1>';

})

let myButton = document.getElementById('clickThisButton');

myButton.addEventListener('click', event => {
    if (event.target.style.backgroundColor == 'red') { 
        event.target.style.backgroundColor == 'blue';
    } else {
        event.target.style.backgroundColor == 'red';
    }
})

let buttonChallenge = document.getElementById('uniqueButton');
let pTagChallenge = document.getElementById('uniqueText');


buttonChallenge.addEventListener('click', () => {
    pTagChallenge.innerText = 'The Button has been clicked.';
})

pTagChallenge.addEventListener('click', () => {
    pTagChallenge.innerText = 'Hey, no pushing!';
})

