const baseURL = 'https://swapi.dev/api/people/4';

function asyncThisThing() {
  return new Promise((resolve, reject) => {
        resolve('this should print last');
    });
}

async function getCharacter() {
  let response = await fetch(baseURL);
  let character = await response.json();
  console.log(character);
  const result = await asyncThisThing();
  console.log(result);
}

getCharacter();