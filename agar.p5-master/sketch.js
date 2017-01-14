var gameScreen = 0;
var ball;
var food = []; 
var poisonpill = [];
var foodCount = 0;
var poisonCount = 0;
var maxR = 0;
var score = 0; 
var zoom = 1;


function setup(){
	createCanvas(625,625);
	ball = new Ball(width/2,height/2,64);
	for (var i = 0; i < 50; i++){
		var x = random(-width,width*2);
		var y = random(-height,height*2);
		food[i] = new Ball(random(x),random(y),random(10,20));
	}
	for (var i = 0; i < 50; i++){
		var x = random(-width,width*2);
		var y = random(-height,height*2);
		poisonpill[i] = new Poison(random(x),random(y),16);
	}
}
function draw(){
	if (gameScreen == 0){
		initScreen();
	}else if (gameScreen == 1){
		playScreen();
	}else if (gameScreen ==2){
		gameOverScreen();
	}
}

function mousePressed(){
	if (gameScreen==0) { 
    startGame();
  }
  if (gameScreen==2){
  	restart();
  }
}
function startGame(){
	gameScreen = 1;
}
function gameOver (){
	gameScreen = 2;
}
function restart(){
	score = 0;
	ball.dead = false;
	ball.r = 64;
	ball.pos.x = width/2;
	ball.pos.y = height/2;
	gameScreen = 0;
}
