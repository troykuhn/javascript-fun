// fetch('https://www.coolserver.com')
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
​
(abc) => 'yeet';
​
// The PROMISE constructor function takes 1 argument: a callback function that takes 2 parameters
// Callback Fn: The first parameter will contain a function to run when the promise is resolved (cb from the .then(cb))
// Callback Fn: The second parameter contains the functio to run when the promise is rejected (cb from the .catch(cb))
// A PROMISE IS ASYNC BY NATURE
let superCoolPromise = new Promise((resolve, reject) => {
  resolve(42);
  reject('Array indicies start at 1');
});
​
superCoolPromise.then(something => console.log(something)).catch(err => console.error(err));
​
​
let fetchie = (url) => {
  return new Promise((resolve, reject) => {
    if ( url === 'https://supercoolwebsite.io' ) {
      resolve(['abc', 123]);
    } else {
      let myError = new Error('Ya done goofed!');
      reject(myError);
    }
  })
}
​
fetchie('https://supercoolwebsite.io').then(response => console.log(response)).catch(err => console.error(err));
​
console.log('Did this break?');
​
​
async function letsTalkAboutASYNC () {
  
  try {
​
    let response = await fetchie('abc123');
    console.log(response);
​
  } catch (e) {
​
    console.log('Program failed succesfully');
​
  }
}
​
letsTalkAboutASYNC();