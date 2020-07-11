// for ( let j = 0;  j <  5; j++ ) {
//     console.log(j + " ")
//   };

// for ( let j = 10;  j >  5; j-- ) {
//     console.log(j);
//   }

// for ( let j = 0; j <= 10; j+=2  ) {
//     console.log(j);
//   }

// let count = 0;
// for ( ;  count < 9; ++count ) {
//   console.log(count);
// }

// blah = function () {
//     return lala;
//     lala = "hi";
//   };
//   console.log(blah());

// function foo () {
//     return bar();
//     function bar() {
//       return "Poppin' bottles";
//     }
//   }
//   console.log(foo());

// function whatDoesItDo(val) {
//     return val ? 1 : 2;
//   }; 

// function sum(a, b) {
//     return a + b;
//   }
//   console.log(sum(1, 2, 3, 4));

//   let favoriteMovie = {
//       nameOfMovie: '22 Jump Street',
//       runTime: '1 hour and 22 minutes',
//       genre: 'Comedy',
//       characters : {
//           charOne: {
//             name: 'Jenko',
//             age: 22,
//             items: {
//                 itemOne: 'Handguun',
//                 itemTwo: 'Bike'
//             }
//           },
//           charTwo: {
//             name: 'Schmidt',
//             age: 22,
//             items: {
//                 itemOne: 'Handguun',
//                 itemTwo: 'Bike'
//             }
//           }
//         }
//      }

//      console.log(favoriteMovie.characters.charOne.items.itemOne);

// let favoriteMovie = {
//     nameOfMovie: "Interstellar",
//     runTime: "2 Hours",
//     genre: 'Science fiction',
//     characters:
//      {
//       charOne: {
//         name: "McConaughey",
//         age: 45,
//         items: [
//           { itemOne: "Spaceship" },
//           { itemTwo: "Helmet" }, 
//       ]
//       },
//       charTwo: {
//         name: "Murph",
//         age: 35,
//         items: [
//           { itemOne: "Red Hair" },
//           { itemTwo: "Love For Her Father"}
//       ]
//       }
//     },
//   };
  
//   console.log(favoriteMovie.nameOfMovie);
//   console.log(favoriteMovie.runTime);
//   console.log(favoriteMovie.characters)
//   console.log(favoriteMovie.characters.charTwo.name)
//   console.log(favoriteMovie.characters.charTwo.items.itemTwo);

let favMovie = {
  nameOfMovie: 'Interstellar',
  runTime: 200,
  genre: 'Science Fiction',
  characters: [
    {
      charOne: {
        name: 'Murph',
        age: 30,
        items: [
          {itemOne: 'Red Hair',
          itemTwo: 'Ghost in her Room'}
        ]
      }
    },
      {
        charTwo: {
          name: 'Cooper',
          age: 40,
          items: [
            {itemOne: 'Spacesuit',
            itemTwo: 'Love for his daughter'}
          ]
        }
      }
    ]
  }

  function getCharacterByName(name) {
    for (let character in favMovie.characters){
      if(name === character.value);
      console.log(name);
    }
  }

console.log(favMovie.nameOfMovie);
console.log(favMovie.runTime);
console.log(favMovie.characters)
console.log(favMovie.characters[1].charTwo.name);
console.log(favMovie.characters[1].charTwo.items[0].itemOne);
// console.log(favMovie.characters.charTwo.items.itemOne);