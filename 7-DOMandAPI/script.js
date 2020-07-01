let unorderedList = document.querySelector('ul');
let submitButton = document.getElementById('submit');
let rocketForm = document.querySelector('form');

const baseURL = 'https://api.spacexdata.com/v2/rockets';


let fetchRockets = () => {
    event.preventDefault();

    fetch(baseURL)
        .then( response => response.json())
        .then( json => {
            console.log(json);
            json.forEach( rocket => {

                //NEED Name, Cost, MAss, Image
                //Table row for each rocket
                // TD (table data for name cost mass image)
                //drop the row into the tbody

                let row = document.createElement('tr');
                let name = document.createElement('td');
                let cost = document.createElement('td');
                let mass = document.createElement('td');
                let imageData = document.createElement('td');
                let img = document.createElement('img');

                name.innerText = rocket.name;
                cost.innerText = rocket.cost_per_launch;
                mass.innerText = rocket.mass.kg;
                img.src = rocket.flickr_images[0];

                imageData.appendChild(img);

                row.appendChild(name);
                row.appendChild(cost);
                row.appendChild(mass);
                row.appendChild(imageData);

                document.querySelector('tbody').appendChild(row);

            })
        })
        .catch( error => console.error(error) );
}

rocketForm.addEventListener('submit', fetchRockets);


// let myData = [
//     { title: "Downtown is Loud", author: "Adam" },
//     { title: "My Room is Hot", author: "Nathaniel" } ,
//     { title: "My Neighbors are Noisy", author: "Alec"},
//     { title: "Boaty McBoatFace", author: "Sheena"},
//     { title: "I Wish I Could Type As Fast As Adam", author: "Sierra"},
//     { title: "Python's Better", author: "Yaboi Swft"},
// ];

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

// for(let thing of myData) {
//     let mySuperCoolListItem = document.createElement('li');

//     //inner test is the obj's title
//     let myTitle = document.createElement('h3');
//     let myAuthor = document.createElement('p');
    
    
//     myTitle.innerText = thing.title;
//     myAuthor.innerText = "- " + thing.author;
    
//     mySuperCoolListItem.appendChild(myTitle);
//     mySuperCoolListItem.appendChild(myAuthor);

//     console.log(mySuperCoolListItem);
//     unorderedList.appendChild(mySuperCoolListItem);
// }
