var player_score = 0

var speedX = 2
var speedY = 2
var paddleSpeedY = 2

var ballX = 0
var ballY = 0
var ballspeedX = 2

var paddleX = 0
var paddleY = 0
var paddleHeight = 15
var paddleWidth = 100


var Xedge = 600
var Yedge = 400

function setup() {
  createCanvas(Xedge, Yedge)
}

function drawPaddle (x, paddleY) {
  paddleY = paddleY + speedY
  rect(x, paddleY, paddleHeight, paddleWidth)
  if(paddleY >= window.innerHeight - paddleHeight) {
    paddleY = window.innerHeight - paddleHeight
  } else if (paddleY <= 275) {
    paddleY = 275
  }
  console.log("the y axis is", paddleY)
}

function drawBall (x, y, size) {
  ellipse(x, y, size, size)
}


function draw() {
  background(0)
  drawPaddle(0, mouseY)
  drawBall(ballX, 200, 10)
  ballX = ballX + ballspeedX
  
if (ballX < 0 ) {
    ballspeedX = ballspeedX * -1
  } else if (ballX > Xedge) {
    ballspeedX = ballspeedX * -1
  }

  
  
}
  












