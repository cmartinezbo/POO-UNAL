let xA = 135;
let yA = 100;
let rectangleAWidth = 100;
let rectangleAHeight = 25;

let xB = xA + rectangleAWidth - rectangleAHeight;
let yB = yA + rectangleAHeight;
let rectangleBWidth = rectangleAHeight;
let rectangleBHeight = rectangleAWidth + 40;

let xC = xA + rectangleAWidth + rectangleAHeight;
let yC = yA;
let rectangleCWidth = rectangleAHeight;
let rectangleCHeight = rectangleAHeight + rectangleBHeight + 30;

let radiusA = 120;
let radiusB = 165;

function setup() {
  createCanvas(430, 430);
}

function draw() { 
  background(0);
  
  // Set text properties
  textSize(29);
  fill("#FFFFFF");
  
  // Write "Juventus" at (200, 200)
  text("JUVENTUS", xA, yA - 20);

  // Draw rectangle 1
  fill(255);
  noStroke();
  rect(xA, yA, rectangleAWidth, rectangleAHeight);
  rect(xB, yB, rectangleBWidth, rectangleBHeight);
  rect(xC, yC, rectangleCWidth, rectangleCHeight);
  

  
  fill(255);
  noStroke();
  arc(xC - (radiusB/2 - rectangleAHeight), yC + rectangleCHeight, radiusB, radiusB, 0, PI*(2.5/4));
  
    fill(0);
  noStroke();
  arc(xC - (radiusB/2 - rectangleAHeight), yC + rectangleCHeight, radiusB - 50, radiusB - 50, 0, PI*(2.6/4));
  
  fill(255);
    noStroke();
  arc(xB - (radiusA/2 - rectangleAHeight), yB + rectangleBHeight, radiusA, radiusA, 0, PI*(2.5/4));
  
  fill(0);
  noStroke();
  arc(xB - (radiusA/2 - rectangleAHeight), yB + rectangleBHeight, radiusA - 50, radiusA - 50, 0, PI*(2.6/4));
}
