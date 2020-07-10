let [name, age, height] = ['Yaboi', 89, 45];

console.log(name, age, height);

let numbers = [1, 2, 3, 4];
let [x, y] = numbers;
console.log(x,y);

let information = 'valuable';
let representation = 123;

let status = {
    information,
    representation,
}

console.log(status);

let coordinate = {
    x: 44,
    y: 21,
    z: -89,
}

let shiftPosition = ({x,y,z}, force) => {
    x += force/2;
    y -= force*3;
    z *= force/120;
    return {x,y,z}
}

let newPosition = shiftPosition(coordinate, 780);

console.log(newPosition);