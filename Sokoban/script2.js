let button;
let buttonX = 100; // X position of the button
let buttonY = 100; // Y position of the button
let rectangleVisible = false; // Flag to track rectangle visibility

function setup() {
  createCanvas(400, 400);
  
  button = createButton('Toggle Rectangle');
  button.position(buttonX, buttonY);
  button.mousePressed(toggleRectangle);
  
  // Modify the button's CSS properties
  button.style('position', 'absolute');
  button.style('width', '120px');
  button.style('height', '40px');
}

function draw() {
  background(220);
  
  if (rectangleVisible) {
    fill(255, 0, 0); // Red color
    rect(200, 200, 100, 100); // Draw the rectangle at (200, 200)
  }
}

function toggleRectangle() {
  rectangleVisible = !rectangleVisible; // Toggle the rectangle visibility
}
