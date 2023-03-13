let regularPolygon = {
  
  position: [0, 0],
  rotation: 0,
  edge: 0,
  color: '',
  sides: 0,
  randomize: function() {
    this.position = [Math.round(-100 + 200 * Math.random()), Math.round(-100 + 200 * Math.random())];
  }, 
  // SETTERS
  set myPosition(position) {
    this.position = position;
  }, 
  set myRotation(rotation) {
    this.rotation = rotation;
  },
  set myEdge(edge) {
    this.edge = edge;
  },
  set myColor(color) {
    this.color = color;
  },
  set mySides(sides) {
    this.sides = sides;
  }, 
  // GETTER
  get PolygonInfo() {
    return `Your polygon is located at [${this.position}] with a rotation of ${this.rotation} radians, a edge of ${this.edge}, it is ${this.color} and it has ${this.sides} sides.`;
  }
}

let polygonX_Position = parseInt(prompt("Please enter the x position of the regular polygon: "));
let polygonY_Position = parseInt(prompt("Please enter the y position of the regular polygon: "));
let polygonRotation = parseInt(prompt("Please enter the amount of rotation in radians of the regular polygon: "));
let polygonEdge = parseInt(prompt("Please enter the edge of the regular polygon: "));
let polygonColor = prompt("Please enter the color of the regular polygon: ");
let polygonSides = parseInt(prompt("Please enter the number of sides of the regular polygon: "));

regularPolygon.myPosition = [polygonX_Position, polygonY_Position];
regularPolygon.myRotation = polygonRotation;
regularPolygon.myEdge = polygonEdge;
regularPolygon.myColor = polygonColor;
regularPolygon.mySides = polygonSides;

console.log('\n');
console.log(regularPolygon.PolygonInfo);
console.log('\n');

let isRandomized = prompt("Do you wanna get a new random location for your polygon? Y/N ").toUpperCase();

if (isRandomized === 'Y') {
  regularPolygon.randomize();
  console.log(`The new location of your polygon is [${regularPolygon.position}].`);
} else {
  console.log('Sure, have a nice day :D');
}
