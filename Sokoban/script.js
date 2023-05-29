"use strict";
// Maps
let map1;
let map2;
let map3;
let map4;
let map5;
let map6;

// Sounds
let blueLockSound;
let winSound;
let goalSound;
let jumpSound;
let temazoSound;
let mainSound;
let sliderSound;
let buttonSound;

// Sound Levels
let blueLockSoundLevel = 0.12;
let mainSoundLevel = 0.12;
let goalSoundLevel = 0.1;
let jumpSoundLevel = 0;//0.027;
let temazoSoundLevel = 0.1;
let sliderSoundLevel = 0.2;
let buttonSoundLevel = 0.2;

// quadrille object declaration
let quadrille;
let characterQuadrille;
let ballQuadrilles = [];
let goalQuadrilles = [];
let trophyWallQuadrilles = [];

// players
let player;
let bachira;
let chigiri;
let isagi;
let kunigami;
let nagi;
let reo;

// balls
let ball;
let baseballBall;
let basketballBall;
let bowlingBall;
let cricketBall;
let footballBall;
let golfBall;
let pingpongBall;
let poolBall;
let soccerBall;
let tennisBall;
let volleyballBall;

// goals
let goal;
let baseballGoal;
let basketballGoal;
let bowlingGoal;
let cricketGoal;
let footballGoal;
let golfGoal;
let pingpongGoal;
let poolGoal;
let soccerGoal;
let tennisGoal;
let volleyballGoal;

// extras
let baseballBackground;
let basketballBackground;
let bowlingBackground;
let cricketBackground;
let footballBackground;
let golfBackground;
let pingpongBackground;
let poolBackground;
let soccerBackground;
let tennisBackground;
let volleyballBackground;
let settingsBackground;
let box;
let cone;
let trophy;
let trophy2;
let wall;
let level1;
let level2;
let level3;
let level4;
let level5;
let level6;
let level;
let backgroundWallpaper;

// maps
let map;

// user inputs
let choosePlayerSlider;
let chooseThemeSlider;
let chooseMapSlider;

let playerSliderX = 7;
let playerSliderY = 225;
let playerSliderWidth = 200;
let playerSliderInitial = 1;
let playerSliderFinal = 6;
let playerSliderBegin = 1;

let themeSliderX = playerSliderX;
let themeSliderY = playerSliderY + 100;
let themeSliderWidth = 200;
let themeSliderInitial = 1;
let themeSliderFinal = 11;
let themeSliderBegin = 1;

let mapSliderX = playerSliderX;
let mapSliderY = themeSliderY + 100;
let mapSliderWidth = 200;
let mapSliderInitial = 1;
let mapSliderFinal = 6;
let mapSliderBegin = 1;

let sliderTextSize = 20;
let textColor = 0;

let buttonX = playerSliderX + 95;
let buttonY = playerSliderY + 450;
let buttonW = 90;
let buttonH = 40;
let buttonColor;
let buttonTextColor = 0;
let buttonValue = false;
let buttonCurve = 12;
let buttonTextSize = 20;

let defaultButtonColor = 170;

let col = 0;
let row = 0;

let currentPlayerPosition;
let finalPlayerPosition;

let currentBallPositions = [];
let currentGoalPositions = [];
let finalBallPositions = [];
let ballToMove = -1;

let ballBorderColors = [];

// screentouch feature
let touchX = 0;
let touchY = 0;
let initialTouch = 0;

let playerSlider;
let themeSlider;
let mapSlider;

let titleSize = 37;

let playBlueLockOnce = true;
let playWinOnce = true;
let playMainOnce = true;

let initialPlayerPosition;
let initialBallPositions;
let initialGoalPositions;
let initialBorderColors;

let playerSelection;
let goalSelection;
let ballSelection;
let mapSelection;
let levelSelection;
let backgroundSelection;

let movesCounter = 0;
let moveSound = 0;
let currentTime;
let timeStart;
let timeElapsed;
let timeAlreadyStarted = false;

let playerImageSize = 90;
let playerImageX = playerSliderX + 203;
let playerImageY = playerSliderY - 40;

let themeImageSize = 90;
let themeImageX = themeSliderX + 203;
let themeImageY = themeSliderY - 40;

let mapImageSize = 90;
let mapImageX = mapSliderX + 203;
let mapImageY = mapSliderY - 40;

let messageSent = false;
let count = 0;
let title;
let canvasH;
let outlineWidth = 3;


function preload() {
  title = loadImage('Resources/User_Interface/title.png');
  
  // Maps
  map1 = loadJSON('Resources/Maps/map1.json');
  map2 = loadJSON('Resources/Maps/map2.json');
  map3 = loadJSON('Resources/Maps/map3.json');
  map4 = loadJSON('Resources/Maps/map4.json');
  map5 = loadJSON('Resources/Maps/map5.json');
  map6 = loadJSON('Resources/Maps/map6.json');

  // Sounds
  blueLockSound = loadSound('Resources/Sounds/intro.mp3');
  goalSound = loadSound('Resources/Sounds/goalSound.wav');
  jumpSound = loadSound('Resources/Sounds/jumpSound.mp3');
  temazoSound = loadSound('Resources/Sounds/temazoSound.mp3');
  mainSound = loadSound('Resources/Sounds/mainSound.mp3');
  sliderSound = loadSound('Resources/Sounds/sliderSound.wav');
  buttonSound = loadSound('Resources/Sounds/buttonSound.mp3');

  // players
  bachira = loadImage('Resources/Players/Blue_Lock/bachira.png');
  chigiri = loadImage('Resources/Players/Blue_Lock/chigiri.png');
  isagi = loadImage('Resources/Players/Blue_Lock/isagi.png');
  kunigami = loadImage('Resources/Players/Blue_Lock/kunigami.png');
  nagi = loadImage('Resources/Players/Blue_Lock/nagi.png');
  reo = loadImage('Resources/Players/Blue_Lock/reo.png');

  // balls
  baseballBall = loadImage('Resources/Balls/baseballBall.png');
  basketballBall = loadImage('Resources/Balls/basketballBall.png');
  bowlingBall = loadImage('Resources/Balls/bowlingBall.png');
  cricketBall = loadImage('Resources/Balls/cricketBall.png');
  footballBall = loadImage('Resources/Balls/footballBall.png');
  golfBall = loadImage('Resources/Balls/golfBall.png');
  pingpongBall = loadImage('Resources/Balls/pingpongBall.png');
  poolBall = loadImage('Resources/Balls/poolBall.png');
  soccerBall = loadImage('Resources/Balls/soccerBall.png');
  tennisBall = loadImage('Resources/Balls/tennisBall.png');
  volleyballBall = loadImage('Resources/Balls/volleyballBall.png');

  // goals
  baseballGoal = loadImage('Resources/Goals/baseballGoal.png');
  basketballGoal = loadImage('Resources/Goals/basketballGoal.png');
  bowlingGoal = loadImage('Resources/Goals/bowlingGoal.png');
  cricketGoal = loadImage('Resources/Goals/cricketGoal.png');
  footballGoal = loadImage('Resources/Goals/footballGoal.png');
  golfGoal = loadImage('Resources/Goals/golfGoal.png');
  pingpongGoal = loadImage('Resources/Goals/pingpongGoal.png');
  poolGoal = loadImage('Resources/Goals/poolGoal.png');
  soccerGoal = loadImage('Resources/Goals/soccerGoal.png');
  tennisGoal = loadImage('Resources/Goals/tennisGoal.png');
  volleyballGoal = loadImage('Resources/Goals/volleyballGoal.png');

  // extras
  baseballBackground = loadImage('Resources/Backgrounds/baseballBackground.png');
  basketballBackground = loadImage('Resources/Backgrounds/basketballBackground.png');
  bowlingBackground = loadImage('Resources/Backgrounds/bowlingBackground.png');
  cricketBackground = loadImage('Resources/Backgrounds/cricketBackground.png');
  footballBackground = loadImage('Resources/Backgrounds/footballBackground.png');
  golfBackground = loadImage('Resources/Backgrounds/golfBackground.png');
  pingpongBackground = loadImage('Resources/Backgrounds/pingpongBackground.png');
  poolBackground = loadImage('Resources/Backgrounds/poolBackground.png');
  soccerBackground = loadImage('Resources/Backgrounds/soccerBackground.png');
  tennisBackground = loadImage('Resources/Backgrounds/tennisBackground.png');
  volleyballBackground = loadImage('Resources/Backgrounds/volleyballBackground.png');
  settingsBackground = loadImage('Resources/Backgrounds/settingsBackground.jpg');
  
  box = loadImage('Resources/Extras/box.png');
  cone = loadImage('Resources/Extras/cone.png');
  trophy = loadImage('Resources/Extras/trophy.png');
  trophy2 = loadImage('Resources/Extras/trophy2.png');
  wall = loadImage('Resources/Extras/wall.png');
  level1 = loadImage('Resources/User_Interface/level1.png');
  level2 = loadImage('Resources/User_Interface/level2.png');
  level3 = loadImage('Resources/User_Interface/level3.png');
  level4 = loadImage('Resources/User_Interface/level4.png');
  level5 = loadImage('Resources/User_Interface/level5.png');
  level6 = loadImage('Resources/User_Interface/labyrinth.png');
}

function setup() {
  buttonX += windowHeight;
  
  playerSlider = createSlider(playerSliderInitial, playerSliderFinal, playerSliderBegin);
  playerSlider.position(windowHeight + playerSliderX, playerSliderY);
  playerSlider.size(playerSliderWidth, 10);

  themeSlider = createSlider(themeSliderInitial, themeSliderFinal, themeSliderBegin);
  themeSlider.position(windowHeight + themeSliderX, themeSliderY);
  themeSlider.size(themeSliderWidth, 10);

  mapSlider = createSlider(mapSliderInitial, mapSliderFinal, mapSliderBegin);
  mapSlider.position(windowHeight + mapSliderX, mapSliderY);
  mapSlider.size(mapSliderWidth, 10);
  
  choosePlayerSlider = playerSlider.value(); 
  chooseThemeSlider = themeSlider.value(); 
  chooseMapSlider = mapSlider.value(); 

  playerSelection = {
    1: isagi,
    2: bachira,
    3: chigiri,
    4: kunigami,
    5: nagi,
    6: reo,
  }

  ballSelection = {
    1: soccerBall,
    2: basketballBall,
    3: bowlingBall,
    4: cricketBall,
    5: footballBall,
    6: golfBall,
    7: pingpongBall,
    8: poolBall,
    9: baseballBall,
    10: tennisBall,
    11: volleyballBall,
  }

  goalSelection = {
    1: soccerGoal,
    2: basketballGoal,
    3: bowlingGoal,
    4: cricketGoal,
    5: footballGoal,
    6: golfGoal,
    7: pingpongGoal,
    8: poolGoal,
    9: baseballGoal,
    10: tennisGoal,
    11: volleyballGoal,
  }

  backgroundSelection = {
    1: soccerBackground,
    2: basketballBackground,
    3: bowlingBackground,
    4: cricketBackground,
    5: footballBackground,
    6: golfBackground,
    7: pingpongBackground,
    8: poolBackground,
    9: baseballBackground,
    10: tennisBackground,
    11: volleyballBackground,
  }

  mapSelection = {
    1: map1,
    2: map2,
    3: map3,
    4: map4,
    5: map5,
    6: map6,
  }

  levelSelection = {
    1: level1,
    2: level2,
    3: level3,
    4: level4,
    5: level5,
    6: level6,
  }

  player = playerSelection[choosePlayerSlider];
  ball = ballSelection[chooseThemeSlider];
  goal = goalSelection[chooseThemeSlider];
  backgroundWallpaper = backgroundSelection[chooseThemeSlider];
  map = mapSelection[chooseMapSlider];
  level = levelSelection[chooseMapSlider];
  
  canvasH = windowHeight - 20;
  
  Quadrille.CELL_LENGTH = canvasH / map.gridSize;
  createCanvas(canvasH * 1.45 , canvasH);

  // create a quadrille name per ball
  for (let i = 0; i < map.ballPositions.length; i++) {
    ballBorderColors.push('black');
    ballQuadrilles.push(`ball${i}`);
  }

  // create a quadrille name per goal
  for (let i = 0; i < map.goalPositions.length; i++) {
    goalQuadrilles.push(`goal${i}`);
  }

  // create a quadrille name per trophy-wall
  for (let i = 0; i < map.wallPositions.length; i++) {
    trophyWallQuadrilles.push(`wall${i}`);
  }

  // quadrille object initialization
  quadrille = createQuadrille(map.gridSize, map.gridSize);
  characterQuadrille = createQuadrille(1, 1);

  // ball quadrilles object initialization
  for (let i = 0; i < ballQuadrilles.length; i++) {
    globalThis[ballQuadrilles[i]] = createQuadrille(1, 1);
  }

  // goal quadrilles object initialization
  for (let i = 0; i < goalQuadrilles.length; i++) {
    globalThis[goalQuadrilles[i]] = createQuadrille(1, 1);
  }

  // trophy-wall quadrilles object initialization
  for (let i = 0; i < trophyWallQuadrilles.length; i++) {
    globalThis[trophyWallQuadrilles[i]] = createQuadrille(1, 1);
  }


  // draw initial walls
  for (let [row, column] of map.wallPositions) {
    quadrille.fill(row, column, wall);
  }

  // drawing 1x1 quadrilles
  // draw player
  characterQuadrille.fill(0, 0, player);

  // draw balls
  for (let i = 0; i < ballQuadrilles.length; i++) {
    globalThis[ballQuadrilles[i]].fill(0, 0, ball);
  }

  // draw goals
  for (let i = 0; i < goalQuadrilles.length; i++) {
    globalThis[goalQuadrilles[i]].fill(0, 0, goal);
  }

  // draw trophy
  for (let i = 0; i < trophyWallQuadrilles.length; i++) {
    globalThis[trophyWallQuadrilles[i]].fill(0, 0, trophy2);
  }

  currentPlayerPosition = JSON.parse(JSON.stringify(map.playerPosition));
  currentBallPositions = JSON.parse(JSON.stringify(map.ballPositions));
  currentGoalPositions = JSON.parse(JSON.stringify(map.goalPositions));
  initialBorderColors = JSON.parse(JSON.stringify(ballBorderColors));
}

function printSlidersText() {
  push();
  textSize(sliderTextSize);
  fill(textColor);
  text("Select player: " + choosePlayerSlider, windowHeight + playerSliderX + 12, playerSliderY + 25);
  pop();

  push();
  textSize(sliderTextSize);
  fill(textColor);
  text("Select sport: " + chooseThemeSlider, windowHeight + themeSliderX + 12, themeSliderY + 25);
  pop();

  push();
  textSize(sliderTextSize);
  fill(textColor);
  text("Select level: " + chooseMapSlider, windowHeight + mapSliderX + 12, mapSliderY + 25);
  pop();

  push();
  textSize(sliderTextSize);
  fill(textColor);
  text("Total moves: " + movesCounter, windowHeight + mapSliderX + 70, mapSliderY + 25 + 100);
  pop();

  push();
  textSize(sliderTextSize);
  fill(textColor);
  text("Total time: " + timeElapsed, windowHeight + mapSliderX + 80, mapSliderY + 25 + 180);
  pop();
}

function draw() {
  background(255,255,255);
  
  if (timeAlreadyStarted){
    currentTime = millis();
    timeElapsed = Math.floor((currentTime - timeStart) / 1000);
  }
  
  choosePlayerSlider = playerSlider.value(); 
  chooseThemeSlider = themeSlider.value(); 
  chooseMapSlider = mapSlider.value();

  printSlidersText();
  playerSlider.input(playSliderSound);
  themeSlider.input(playSliderSound);
  mapSlider.input(playSliderSound);
  
  // change the button color when the mouse is over it
  if (mouseX > buttonX && mouseX < buttonX + buttonW &&
    mouseY > buttonY && mouseY < buttonY + buttonH) {
    if (!buttonValue) {
      buttonColor = color(0,255,0); //green
    } else if (buttonValue) {
      buttonColor = color(255,0,0); //red
      }
  } else {
    buttonColor = defaultButtonColor;
  }

  if (!buttonValue) {
    restart();
  } else if (buttonValue) {
    play();
  }

  image(player, windowHeight + playerImageX , playerImageY, playerImageSize, playerImageSize);
  image(ball, windowHeight + themeImageX , themeImageY, themeImageSize, themeImageSize);
  image(level, windowHeight + mapImageX , mapImageY, mapImageSize, mapImageSize);
  image(title, windowHeight + playerSliderX + 2 , playerSliderY - 200, mapImageSize+185, mapImageSize+40);

  playBlueLockSound();
  playMainSound();
}

function keyPressed() {
  row = (key === 'w') ? -1 : (key === 's') ? 1 : row;
  col = (key === 'a') ? -1 : (key === 'd') ? 1 : col;

  if (keyCode === LEFT_ARROW) {
    col = -1;
  } else if (keyCode === RIGHT_ARROW) {
    col = 1;
  } else if (keyCode === UP_ARROW) {
    row = -1;
  } else if (keyCode === DOWN_ARROW) {
    row = 1;
  }
}

function getFinalPositions() {
  if (col != 0) {row = 0} // Block diagonal movement in 1 input
  finalPlayerPosition = [currentPlayerPosition[0] + row, currentPlayerPosition[1] + col];

  let a = JSON.stringify(map.wallPositions);
  let j = JSON.stringify(currentBallPositions);
  let k = JSON.stringify(currentGoalPositions);

  let message = [currentPlayerPosition[0] + row, currentPlayerPosition[1] + col] + a;

  //if (row || col ){window.prompt(message);}

  if (a.includes('['+finalPlayerPosition+']')) { // if final position is a wall
    finalPlayerPosition = currentPlayerPosition;
  } else {
    if (j.includes('['+finalPlayerPosition+']') && a.includes('['+[finalPlayerPosition[0] + row, finalPlayerPosition[1] + col]+']')) { // if final position is a ball but final position + 1 is a wall
      finalPlayerPosition = currentPlayerPosition;
    } else {
      if (j.includes('['+finalPlayerPosition+']') && j.includes('['+[finalPlayerPosition[0] + row, finalPlayerPosition[1] + col]+']')) { // if final position is a ball but final position + 1 is a ball
        finalPlayerPosition = currentPlayerPosition;
      } else {
        let isGoal = false;
        
        currentPlayerPosition = finalPlayerPosition;
        if (j.indexOf(finalPlayerPosition) != -1) { // if final position is a ball
          ballToMove = (j.indexOf(finalPlayerPosition) - 2) / 6;
          if (k.includes([finalPlayerPosition[0] + row, finalPlayerPosition[1] + col])) { 
            ballBorderColors[ballToMove] = 'yellow';
            goalSound.setVolume(goalSoundLevel);
            goalSound.play();
            isGoal = true;
            } 
          else { ballBorderColors[ballToMove] = 'black' }
        }
        if ((row || col)&&(!isGoal)) {
          movesCounter++;
          jumpSound.setVolume(jumpSoundLevel);
          jumpSound.play();}

      }
    }

  }

  finalBallPositions[ballToMove] = [finalPlayerPosition[0] + row, finalPlayerPosition[1] + col];

  if (ballToMove == -1) {
    finalBallPositions = currentBallPositions;
  } else {
    currentBallPositions = finalBallPositions;
  }

  row = 0;
  col = 0;
  ballToMove = -1;
}

function touchStarted() {
  if (mouseX != 0) {
    touchX = mouseX;
  } else if (mouseX == 0) {
    touchX = touchX;
  }

  if (mouseY != 0) {
    touchY = mouseY;
  } else if (mouseY == 0) {
    touchY = touchY;
  }

  initialTouch = 1;
}

function touchMoved() {

  if (initialTouch == 1) {
    let deltaX = abs(touchX - mouseX);
    let deltaY = abs(touchY - mouseY);

    if (deltaX > deltaY && touchX > mouseX) { // left
      col = -1;
    } else if (deltaX > deltaY && touchX < mouseX) { // right
      col = 1;
    } else if (deltaY > deltaX && touchY > mouseY) { // up
      row = -1;
    } else if (deltaY > deltaX && touchY < mouseY) { // down
      row = 1;
    }

    touchX = mouseX;
    touchY = mouseY;
    initialTouch = 0;
  }

}

function touchEnded() {
  row = 0;
  col = 0;
}

function mousePressed() {
  // increment the variable value when the mouse is pressed
  if (mouseX > buttonX && mouseX < buttonX + buttonW &&
    mouseY > buttonY && mouseY < buttonY + buttonH) {
    buttonValue = !buttonValue;
    playButtonSound();
  }
}

function playBlueLockSound() {
  if (!buttonValue) {
    if (playBlueLockOnce){
      blueLockSound.setVolume(blueLockSoundLevel);
      blueLockSound.play();
      playBlueLockOnce = false;
    } 
  } else {
    blueLockSound.stop();
    playBlueLockOnce = true;
  }
}

function playWinSound() {
  if (buttonValue) {
    if (playWinOnce){
      temazoSound.setVolume(temazoSoundLevel);
      temazoSound.play();
      playWinOnce = false;
    } 
  } else {
    temazoSound.stop();
    playWinOnce = true;
  }
}

function playMainSound() {
  if (buttonValue) {
    if (playMainOnce){
      mainSound.setVolume(mainSoundLevel);
      mainSound.play();
      playMainOnce = false;
    } 
  } else {
    mainSound.stop();
    playMainOnce = true;
  }
}

function playSliderSound() {
  sliderSound.setVolume(sliderSoundLevel);
  sliderSound.play();
}

function playButtonSound() {
  buttonSound.setVolume(buttonSoundLevel);
  buttonSound.play();
}

function play() {
  background(backgroundWallpaper);
  
  if (!timeAlreadyStarted) {
    timeStart = millis();
    timeAlreadyStarted = true;
  }

  // BUTTON
  push();
  fill(buttonColor);
  rect(buttonX, buttonY, buttonW, buttonH, buttonCurve);
  textSize(buttonTextSize);
  textAlign(CENTER, CENTER);
  fill(buttonTextColor);
  text("Settings", buttonX + buttonW / 2, buttonY + buttonH / 2);
  pop(); 

  printSlidersText();
 
    
  // to display the quadrille a call to drawQuadrille is needed
  drawQuadrille(quadrille, {
    outline: color('black'),
    outlineWeight: outlineWidth,
  });
  
  getFinalPositions();
  
  for (let i = 0; i < goalQuadrilles.length; i++) {
    drawQuadrille(globalThis[goalQuadrilles[i]], {
      x: (map.goalPositions[i][1]) * Quadrille.CELL_LENGTH,
      y: (map.goalPositions[i][0]) * Quadrille.CELL_LENGTH,
      outline: color('black'),
      outlineWeight: outlineWidth,
    });
  }
  
  for (let i = 0; i < ballQuadrilles.length; i++) { // draw every ball
    let currentColor = ballBorderColors[i];
    drawQuadrille(globalThis[ballQuadrilles[i]], {
      x: (finalBallPositions[i][1]) * Quadrille.CELL_LENGTH,
      y: (finalBallPositions[i][0]) * Quadrille.CELL_LENGTH,
      outline: color(currentColor),
      outlineWeight: outlineWidth,
    });
  }
  
  
  let coloredCount = 0;
  for (let i = 0; i < ballQuadrilles.length; i++) { // draw only colored balls on top of uncolored
    let currentColor = ballBorderColors[i];
  
    if (currentColor == 'yellow') {
      drawQuadrille(globalThis[ballQuadrilles[i]], {
        x: (finalBallPositions[i][1]) * Quadrille.CELL_LENGTH,
        y: (finalBallPositions[i][0]) * Quadrille.CELL_LENGTH,
        outline: color(currentColor),
        outlineWeight: outlineWidth  + 2,
      });
      coloredCount++;
    }
  }
  
  if (coloredCount == ballQuadrilles.length) {
    for (let i = 0; i < trophyWallQuadrilles.length; i++) {
      drawQuadrille(globalThis[trophyWallQuadrilles[i]], {
        x: (map.wallPositions[i][1]) * Quadrille.CELL_LENGTH,
        y: (map.wallPositions[i][0]) * Quadrille.CELL_LENGTH,
        outline: color('black'),
        outlineWeight: 0,
      });
    }
    mainSound.stop();
    showScorePrompt();
    playWinSound();
  }
  
  
  drawQuadrille(characterQuadrille, {
    x: (finalPlayerPosition[1]) * Quadrille.CELL_LENGTH,
    y: (finalPlayerPosition[0]) * Quadrille.CELL_LENGTH,
    outline: color('black'),
    outlineWeight: 0,
  });
  
}

function restart() {
  background(175,55);

  // Get player input only during settings mode
  
  player = playerSelection[choosePlayerSlider];
  ball = ballSelection[chooseThemeSlider];
  goal = goalSelection[chooseThemeSlider];
  backgroundWallpaper = backgroundSelection[chooseThemeSlider];
  map = mapSelection[chooseMapSlider];
  level = levelSelection[chooseMapSlider];
  
  line(windowHeight -23, 0, windowHeight-23 , height);
  
  
  currentPlayerPosition = JSON.parse(JSON.stringify(map.playerPosition));
  currentBallPositions = JSON.parse(JSON.stringify(map.ballPositions));
  currentGoalPositions = JSON.parse(JSON.stringify(map.goalPositions));
  ballBorderColors = JSON.parse(JSON.stringify(initialBorderColors)); //Try avoid using JSON, ball colors will remain the same as previous game
  
  // BUTTON
  push();
  fill(buttonColor);
  rect(buttonX, buttonY, buttonW, buttonH, buttonCurve);
  textSize(buttonTextSize);
  textAlign(CENTER, CENTER);
  fill(buttonTextColor);
  text("Play", buttonX + buttonW / 2, buttonY + buttonH / 2);
  pop();
  
  movesCounter = 0;
  timeElapsed = 0;
  timeAlreadyStarted = false;
  messageSent = false;
  count = 0;

  characterQuadrille;
  ballQuadrilles = [];
  goalQuadrilles = [];
  trophyWallQuadrilles = [];

  //SETUP SETTINGS
  Quadrille.CELL_LENGTH = canvasH / map.gridSize;
  
  // create a quadrille name per ball
  for (let i = 0; i < map.ballPositions.length; i++) {
    ballBorderColors.push('black');
    ballQuadrilles.push(`ball${i}`);
  }

  // create a quadrille name per goal
  for (let i = 0; i < map.goalPositions.length; i++) {
    goalQuadrilles.push(`goal${i}`);
  }

  // create a quadrille name per trophy-wall
  for (let i = 0; i < map.wallPositions.length; i++) {
    trophyWallQuadrilles.push(`wall${i}`);
  }

  // quadrille object initialization
  quadrille = createQuadrille(map.gridSize, map.gridSize);
  characterQuadrille = createQuadrille(1, 1);

  // ball quadrilles object initialization
  for (let i = 0; i < ballQuadrilles.length; i++) {
    globalThis[ballQuadrilles[i]] = createQuadrille(1, 1);
  }

  // goal quadrilles object initialization
  for (let i = 0; i < goalQuadrilles.length; i++) {
    globalThis[goalQuadrilles[i]] = createQuadrille(1, 1);
  }

  // trophy-wall quadrilles object initialization
  for (let i = 0; i < trophyWallQuadrilles.length; i++) {
    globalThis[trophyWallQuadrilles[i]] = createQuadrille(1, 1);
  }


  // draw initial walls
  for (let [row, column] of map.wallPositions) {
    quadrille.fill(row, column, wall);
  }

  // drawing 1x1 quadrilles
  // draw player
  characterQuadrille.fill(0, 0, player);

  // draw balls
  for (let i = 0; i < ballQuadrilles.length; i++) {
    globalThis[ballQuadrilles[i]].fill(0, 0, ball);
  }

  // draw goals
  for (let i = 0; i < goalQuadrilles.length; i++) {
    globalThis[goalQuadrilles[i]].fill(0, 0, goal);
  }

  // draw trophy
  for (let i = 0; i < trophyWallQuadrilles.length; i++) {
    globalThis[trophyWallQuadrilles[i]].fill(0, 0, trophy2);
  }

  image(settingsBackground, 1, 1, windowHeight-23, windowHeight-23);
}

function showScorePrompt() {
  let message = 'For level ' + chooseMapSlider  + ' you made ' + movesCounter + ' moves in ' + timeElapsed + ' seconds';
  
    if (!messageSent && count==2){
      window.prompt(message);
      messageSent = true; 
      buttonValue = false;
    }
  count++;
}