let sign;
let fps = 60;

let verticalMargin = 70;

let sequence;
let currentIndex = -1;
let n;
let positions;
let currentPos;
let hop;

let rMax;
let step;

let xInitial = 45;
let yInitial = 350;
let currentX = 0;
let previousX;

let sliderX = 25 + xInitial;
let sliderY = 20;
let sliderWidth = 200;
let sliderInitial = 1;
let sliderFinal = 50000;
let sliderBegin = 100;

let sliderFpsX;
let sliderFpsY = 20;
let sliderFpsWidth = 200;
let sliderFpsInitial = 1;
let sliderFpsFinal = 60;
let sliderFpsBegin = 60;

let buttonX = sliderX + sliderWidth + 15;
let buttonY = sliderY - 7;
let buttonW = 50;
let buttonH = 30;
let buttonColor;
let buttonTextColor = 0;
let buttonValue = false;

let buttonThemeX;
let buttonThemeY = sliderFpsY - 7;
let buttonThemeW = 70;
let buttonThemeH = 30;
let buttonThemeColor;
let buttonThemeTextColor;
let buttonThemeValue = false;

let defaultButtonColor = 170;

let backgroundColor = 0;
let gridColor = 255;
let graphColor = 255;
let textColor = 255;
let axisThickness = 3;
let graphThickness = 1;

let titleSize = 37;
let sliderTextSize = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  sliderFpsX = width - 215 - xInitial;
  buttonThemeX = sliderFpsX - 96;
  
  slider = createSlider(sliderInitial, sliderFinal, sliderBegin); // Create slider to set sequence max index
  slider.position(sliderX, sliderY);
  slider.size(sliderWidth, 10);

  sliderFps = createSlider(sliderFpsInitial, sliderFpsFinal, sliderFpsBegin); // Create slider to ser FPS value
  sliderFps.position(sliderFpsX, sliderFpsY);
  sliderFps.size(sliderFpsWidth, 10);
  
  background(backgroundColor);
}

function draw() {
  // Draw a background color rectangle to avoid upper text overlapping
  push();
  noStroke();
  fill(backgroundColor);
  rect(xInitial, 0, width - (2*xInitial), verticalMargin); 
  pop();

  push();
  textSize(titleSize);
  fill(textColor);
  text("Recaman Sequence", width / 2 - 175, sliderY + 23);
  pop();

  push();
  let sliderCurrent = slider.value();
  textSize(sliderTextSize);
  fill(textColor);
  text("Desired value: " + sliderCurrent, sliderX - 5, sliderY + 30);
  pop();

  push();
  let sliderFpsCurrent = sliderFps.value();
  textSize(sliderTextSize);
  fill(textColor);
  text("FPS: " + sliderFpsCurrent, sliderFpsX - 5, sliderFpsY + 30);
  pop();

  // Set the frame rate
  frameRate(sliderFpsCurrent); 
  
  //-------------------------------------------------------------------------------------------------
  
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
      fill(buttonTextColor);
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
      fill(buttonTextColor);
      text("Stop", buttonX + buttonW / 2, buttonY + buttonH / 2);
      pop();
      
      }
  } else {
    buttonColor = defaultButtonColor;
  }

  if (!buttonValue) {
      // draw the button
      push();
      fill(buttonColor);
      rect(buttonX, buttonY, buttonW, buttonH);
      textSize(15);
      textAlign(CENTER, CENTER);
      fill(buttonTextColor);
      text("Run", buttonX + buttonW / 2, buttonY + buttonH / 2);
      pop();
    }else{
      push();
      fill(buttonColor);
      rect(buttonX, buttonY, buttonW, buttonH);
      textSize(15);
      textAlign(CENTER, CENTER);
      fill(buttonTextColor);
      text("Stop", buttonX + buttonW / 2, buttonY + buttonH / 2);
      pop();
      
      }

  // check if the mouse is over the buttonTheme
  if (mouseX > buttonThemeX && mouseX < buttonThemeX + buttonThemeW &&
    mouseY > buttonThemeY && mouseY < buttonThemeY + buttonThemeH) {
    if (!buttonThemeValue) {
      // change the button color when the mouse is over it
      buttonThemeColor = 255;
      buttonThemeTextColor = 0;
      // draw the button
      push();
      fill(buttonThemeColor);
      rect(buttonThemeX, buttonThemeY, buttonThemeW, buttonThemeH);
      textSize(15);
      textAlign(CENTER, CENTER);
      fill(buttonThemeTextColor);
      text("Light", buttonThemeX + buttonThemeW / 2, buttonThemeY + buttonThemeH / 2);
      pop();
    }else{
      buttonThemeColor = 0;
      buttonThemeTextColor = 255;
      // draw the button
      push();
      fill(buttonThemeColor);
      rect(buttonThemeX, buttonThemeY, buttonThemeW, buttonThemeH);
      textSize(15);
      textAlign(CENTER, CENTER);
      fill(buttonThemeTextColor);
      text("Dark", buttonThemeX + buttonThemeW / 2, buttonThemeY + buttonThemeH / 2);
      pop();
      
      }
  } else {
    buttonThemeColor = defaultButtonColor;
    buttonThemeTextColor = 0;
  }

  if (!buttonThemeValue) {
      // draw the button
      push();
      fill(buttonThemeColor);
      rect(buttonThemeX, buttonThemeY, buttonThemeW, buttonThemeH);
      textSize(15);
      textAlign(CENTER, CENTER);
      fill(buttonThemeTextColor);
      text("Light", buttonThemeX + buttonThemeW / 2, buttonThemeY + buttonThemeH / 2);
      pop();
    }else{
      push();
      fill(buttonThemeColor);
      rect(buttonThemeX, buttonThemeY, buttonThemeW, buttonThemeH);
      textSize(15);
      textAlign(CENTER, CENTER);
      fill(buttonThemeTextColor);
      text("Dark", buttonThemeX + buttonThemeW / 2, buttonThemeY + buttonThemeH / 2);
      pop();
      
      }
//-----------------------------------------------------------------------
  
  // Set line thickness of axis
  push();
  strokeWeight(axisThickness);
  stroke(gridColor); // Sets the stroke color
  
  line(xInitial, 0, xInitial, height); // Left vertical margin
  line(0, height / 2, width, height / 2); // Middle horizontal margin
  line(0, verticalMargin, width, verticalMargin); // Title margin
  line(0, height - verticalMargin, width, height - verticalMargin); // Bottom horizontal margin
  line(width - xInitial, 0, width - xInitial, height); // Right vertical margin
  pop();
  
//-----------------------------------------------------------------------
  
  //Sequence drawing process
  if (buttonValue){
    
    //-----------------------------------------------------------------------
    // Apply theme color at first drawing iteration
    if (currentIndex === -1){
      if (!buttonThemeValue) {
        backgroundColor = 0;
        gridColor = 255;
        graphColor = 255;
        textColor = 255;
      }else{
        backgroundColor = 255;
        gridColor = 0;
        graphColor = 0;
        textColor = 0;
      }

      // Initialize all values
      background(backgroundColor);
      sequence = [0]; 
      n = sliderCurrent;
      positions = [0];
      hop = 0;

      // Find max X value
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
      
      if (lengthXStepY > width  - (2*xInitial)) {step = stepX} else {step = stepY}
      currentIndex = 0;
      previousX = xInitial;
    }
    //-----------------------------------------------------------------------
    
      push();
      noStroke();
      fill(backgroundColor);
      rect(xInitial + 10, height - (xInitial + 15), width - (2*xInitial) - 20, height); //set background color in draw() to avoid figure overlapping
      pop();

      push();
      fill(textColor);
      textSize(30)
      let k = currentIndex + 1;
      text('n = ' + k, width/2 - 80, height - (verticalMargin/2));
      pop();
    
    let nextNumber = sequence[currentIndex] - currentIndex;
    
    // Try substracting, add when result is positive and is not repeated
    if (nextNumber < 0 || sequence.includes(nextNumber)) {
      nextNumber = sequence[currentIndex] + currentIndex;
    }
  
    sequence.push(nextNumber); // Add number to sequence
    currentIndex++;
  
    sign = -1;
    let nextNumberFuture = sequence[currentIndex] - currentIndex;
    if (nextNumberFuture < 0 || sequence.includes(nextNumberFuture)) {
      sign = 1;
    }
  
  
    let radius = sign * (step * currentIndex); // Get current radius
    currentX = (radius + previousX); // Central X coordinate of current semicircle
    previousX = currentX + radius; //Set previous X value to current sequence value
  
    // Draw semicircle upside when index is even, otherwise draw it downside
    push();
    if (currentIndex % 2 == 1) {
      strokeWeight(graphThickness);
      stroke(graphColor);
      noFill();
      arc(currentX, height / 2, radius * 2, radius * 2, 0, PI);
    } else {
      strokeWeight(graphThickness);
      stroke(graphColor);
      noFill();
      arc(currentX, height / 2, radius * 2, radius * 2, PI, 0);
    }
    pop();

    // End drawing process 
    if (currentIndex === n) {
      buttonValue = false; 
      currentIndex = -1;
    }
    
  }

//-----------------------------------------------------------------------
  
}


function mousePressed() {
  // increment the variable value when the mouse is pressed
  if (mouseX > buttonX && mouseX < buttonX + buttonW &&
    mouseY > buttonY && mouseY < buttonY + buttonH) {
    buttonValue = !buttonValue;
  }

  if (mouseX > buttonThemeX && mouseX < buttonThemeX + buttonThemeW &&
    mouseY > buttonThemeY && mouseY < buttonThemeY + buttonThemeH) {
    buttonThemeValue = !buttonThemeValue;
  }
}
