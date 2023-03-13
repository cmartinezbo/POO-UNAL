//RECAMAN SEQUENCE
let sequence = [0]; // Inicializamos la secuencia con el valor 0
let currentIndex = 0;
let step = 4.25; // Tamaño del incremento de los radios de los semicírculos
let n = 62; //Posicion de la secuancia deseada
let sign;
let i = 60;

let xInitial = 50;
let yInitial = 300;
let currentX = 0;
let previousX = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noFill(); 
  strokeWeight(2);
}

function draw() {
  
  // Set line thickness of axis
  strokeWeight(2);
  line(50, 0, 50, height);
  strokeWeight(1);
  line(0, height/2, width, height/2);

  
  let nextNumber = sequence[currentIndex] - currentIndex; // Resta
  if (nextNumber < 0 || sequence.includes(nextNumber)) { // Si el número es negativo o ya está en la secuencia, sumamos en lugar de restar
    nextNumber = sequence[currentIndex] + currentIndex; // Suma
  }

  sequence.push(nextNumber); // Agregamos el siguiente número a la secuencia
  currentIndex++;

  sign = -1;
  let nextNumberFuture = sequence[currentIndex] - currentIndex;
  if (nextNumberFuture < 0 || sequence.includes(nextNumberFuture)) {
    sign = 1;
  }
  

  // Update the current value randomly
/*   currentX = sign; */

  // Draw the current and previous values on the canvas
  /* textSize(32);
  textAlign(CENTER);
  text("Current X: " + currentX, width/2, 50 + i);
  text("Previous X: " + previousX, width/2, 50 + 350 + i);
  i += 50; */



  let radius = sign * (step * currentIndex); // Calculamos el radio del semicírculo
  currentX = (radius + previousX); // Coordenada x del semicírculo

  // Update the previous value to be the same as the current value
  previousX = currentX + radius;

    // Dibujamos un semicírculo hacia arriba si el índice es par, y hacia abajo si es impar
  if (currentIndex % 2 == 1) {
    arc(currentX, yInitial, radius*2, abs(radius)*2, 0, PI);
  } else {
    arc(currentX, yInitial, radius*2, abs(radius)*2, PI, 0);
  }

  if (currentIndex === n) { // Salimos del bucle si llegamos al enésimo elemento
    noLoop();
  }
}
