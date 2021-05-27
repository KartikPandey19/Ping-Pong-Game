let width = 400;
let height = 450;
let paddleWidth = 90;
let paddleHeight = 15;
let canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
canvas.style.background = 'wheat';

let context = canvas.getContext('2d');


function Player(){
    this.paddle = new Paddle
}

// paddle function

function paddle(x,y,paddleHeight,paddleWidth){
  this.x = x;
  this.y = y;
  this.width = paddleWidth;
  this.height = paddleHeight;
  this.xDirSpeed = 0;
}
paddle.prototype.drawPaddle = function(){
    context.beginPath();
    context.fillStyle = '#00cc00';
    context.fillRect(this.x,this.y,this.width,this.height);
    context.closePath();
}
c
