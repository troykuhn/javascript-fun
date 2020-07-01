let unorderedList = document.querySelector('ul');
let submitButton = document.getElementById('submit');

let myData = [
    { title: "Downtown is Loud", author: "Adam" },
    { title: "My Room is Hot", author: "Nathaniel" } ,
    { title: "My Neighbors are Noisy", author: "Alec"},
    { title: "Boaty McBoatFace", author: "Sheena"},
    { title: "I Wish I Could Type As Fast As Adam", author: "Sierra"},
    { title: "Python's Better", author: "Yaboi Swft"},
];

// let mySuperCoolListItem = document.createElement('li');
// mySuperCoolListItem.innerText = "Is this real life?";

// console.log(mySuperCoolListItem);

// unorderedList.appendChild(mySuperCoolListItem);

// for (let i = 0; i < 10; i++) {
//     let mySuperCoolListItem = document.createElement('li');
//     mySuperCoolListItem.innerText = "Is this real life?";

// console.log(mySuperCoolListItem);

// unorderedList.appendChild(mySuperCoolListItem);
// }

for(let thing of myData) {
    let mySuperCoolListItem = document.createElement('li');

    //inner test is the obj's title
    let myTitle = document.createElement('h3');
    let myAuthor = document.createElement('p');
    
    
    myTitle.innerText = thing.title;
    myAuthor.innerText = "- " + thing.author;
    
    mySuperCoolListItem.appendChild(myTitle);
    mySuperCoolListItem.appendChild(myAuthor);

    console.log(mySuperCoolListItem);
    unorderedList.appendChild(mySuperCoolListItem);
}
