function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();

  // Draw the circle
  fill('#ffffff');
  ellipse(200, 200, 200);

  // Draw the crown
  fill('#fecd0a');
  triangle(200, 70, 140, 180, 260, 180);
  triangle(200, 50, 110, 140, 200, 30);
  triangle(200, 50, 290, 140, 200, 30);

  // Draw the initials
  fill('#ffffff');
  rect(160, 160, 80, 40);
  fill('#000000');
  textSize(30);
  text('RM', 175, 190);
}
