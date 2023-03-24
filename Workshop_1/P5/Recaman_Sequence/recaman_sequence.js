//RECAMAN SEQUENCE
let sign;
let fps = 60;
let axisThickness = 3;

let sequence;
let currentIndex = -1;
let n;
let positions;
let currentPos;
let hop;

let rMax;
let step; // Tamaño del incremento de los radios de los semicírculos

let xInitial = 45;
let yInitial = 350;
let currentX = 0;
let previousX;

let sliderX = 25 + xInitial;
let sliderY = 20;
let sliderInitial = 1;
let sliderFinal = 50000;
let sliderBegin = 100; //Sequence index

let buttonX = sliderX + 190;
let buttonY = sliderY - 7;
let buttonW = 50;
let buttonH = 30;
let buttonColor = 200;
let buttonValue = false;

let backgroundColor = 0;
let gridColor = 255;
let graphColor = 255;
let textColor = 255;


function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(sliderInitial, sliderFinal, sliderBegin); // create slider with min value 0, max value 100, and starting value 50
  slider.position(sliderX, sliderY); // set the position of the slider
  slider.size(175, 10);
  frameRate(fps); // set the frame rate
  background(backgroundColor);
  noFill();
  strokeWeight(2);
}

function draw() {
  push();
  noStroke();
  fill(backgroundColor);
  rect(xInitial, 0, width - (2*xInitial), (xInitial + 25)); //set background color in draw() to avoid figure overlapping
  pop();
  
  push();
  textSize(32);
  fill(0);
  fill(textColor);
  text("Recaman Sequence", width / 2 - 175, sliderY + 23);
  pop();

  push();
  let sliderCurrent = slider.value(); // get the current value of the slider
  textSize(20);
  fill(0);
  fill(textColor);
  text("Slider value: " + sliderCurrent, sliderX - 5, sliderY + 30); // display the current value of the slider
  pop();
  
  // check if the mouse is over the button
  if (mouseX > buttonX && mouseX < buttonX + buttonW &&
    mouseY > buttonY && mouseY < buttonY + buttonH) {
    if (!buttonValue) {
      // change the button color when the mouse is over it
      buttonColor = color(0,255,0);
      // draw the button
      push();
      fill(buttonColor);
      rect(buttonX, buttonY, buttonW, buttonH);
      textSize(15);
      textAlign(CENTER, CENTER);
      fill(0);
      text("Run", buttonX + buttonW / 2, buttonY + buttonH / 2);
      pop();
    }else{
      buttonColor = color(255,0,0);
      // draw the button
      push();
      fill(buttonColor);
      rect(buttonX, buttonY, buttonW, buttonH);
      textSize(15);
      textAlign(CENTER, CENTER);
      fill(0);
      text("Stop", buttonX + buttonW / 2, buttonY + buttonH / 2);
      pop();
      
      }
  } else {
    buttonColor = 200;
  }

  if (!buttonValue) {
      // draw the button
      push();
      fill(buttonColor);
      rect(buttonX, buttonY, buttonW, buttonH);
      textSize(15);
      textAlign(CENTER, CENTER);
      fill(0);
      text("Run", buttonX + buttonW / 2, buttonY + buttonH / 2);
      pop();
    }else{
      push();
      fill(buttonColor);
      rect(buttonX, buttonY, buttonW, buttonH);
      textSize(15);
      textAlign(CENTER, CENTER);
      fill(0);
      text("Stop", buttonX + buttonW / 2, buttonY + buttonH / 2);
      pop();
      
      }

  // Set line thickness of axis
  push();
  strokeWeight(axisThickness);
  stroke(gridColor); // Sets the stroke color
  
  line(xInitial, 0, xInitial, height);

  line(0, height / 2, width, height / 2);

  line(0, (xInitial + 25), width, (xInitial + 25));

  line(0, height - (xInitial + 25), width, height - (xInitial + 25));

  line(width - (xInitial), 0, width - (xInitial), height);
  pop();

  //Sequence drawing process
  if (buttonValue){
    if (currentIndex === -1){
      background(backgroundColor);
      sequence = [0]; // Inicializamos la secuencia con el valor 0
      //////////////////////////////////////////////////
      n = sliderCurrent;
      positions = [0];
      hop = 0;
    
      for (let i = 0; i < n; i++) {             
        hop++;
        currentPos = positions[i] - hop;
        
         positions.push(
          currentPos > 0? !positions.includes(currentPos)? currentPos : 
          currentPos + 2 * hop : 
          currentPos + 2 * hop)
      }
      
      let maxNumber = max(positions);
    
      let radiusY_max = (height / 2) - 70;
      let stepY = (radiusY_max / n);
      let stepX = (width - 45 - xInitial) / (2 * maxNumber);
    
      let lengthXStepY = maxNumber * 2 * stepY;
      
      if (lengthXStepY > width - 45 - xInitial) {step = stepX} else {step = stepY}
      //////////////////////////////////////////////////
      currentIndex = 0;
      previousX = xInitial;
    }
      push();
      noStroke();
      fill(backgroundColor);
      rect(xInitial + 10, height - (xInitial + 15), width - (2*xInitial) - 20, height); //set background color in draw() to avoid figure overlapping
      pop();


      push();
      fill(255);
      textSize(30)
      let k = currentIndex + 1;
      text('n = ' + k, width/2 - 45, height - 30);
      pop();

    
    
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
  
  
    let radius = sign * (step * currentIndex); // Calculamos el radio del semicírculo
    currentX = (radius + previousX); // Coordenada x del semicírculo
  
    // Update the previous value to be the same as the current value
    previousX = currentX + radius;
  
    // Dibujamos un semicírculo hacia arriba si el índice es par, y hacia abajo si es impar
    if (currentIndex % 2 == 1) {
      strokeWeight(1);
      stroke(graphColor); // Sets the stroke color
      noFill();
      arc(currentX, height / 2, radius * 2, abs(radius) * 2, 0, PI);
    } else {
      strokeWeight(1);
      stroke(graphColor); // Sets the stroke color
      noFill();
      arc(currentX, height / 2, radius * 2, abs(radius) * 2, PI, 0);
    }
  
    if (currentIndex === n) { // Salimos del bucle si llegamos al enésimo elemento
      buttonValue = false; 
      currentIndex = -1;
    }

  }
}


function mousePressed() {
  // increment the variable value when the mouse is pressed
  if (mouseX > buttonX && mouseX < buttonX + buttonW &&
    mouseY > buttonY && mouseY < buttonY + buttonH) {
    buttonValue = !buttonValue;
  }
}
