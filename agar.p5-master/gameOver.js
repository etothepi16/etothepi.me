var gameOverScreen = function(){
	background(44,62,80);
	fill(236, 240, 241);
  	textAlign(CENTER);
  	textSize(12);
	text('Final Score: ',height/2,width/2-120);
	textSize(130);
	text(score, width/2, height/2);
	textSize(15);
	text('Click to restart', width/2, height-30);
}