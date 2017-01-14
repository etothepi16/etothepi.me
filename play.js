var playScreen = function(){
	background(0);
	translate(width/2, height/2);
	var newzoom = 64/ball.r;
	zoom = lerp(zoom,newzoom,0.1);
	scale(zoom);
	//set origin to middle of ball and "move" the other stuff around it
	translate(-ball.pos.x, -ball.pos.y);
	ball.show();
	ball.update();

	score = floor(maxR*Math.abs(foodCount-poisonCount));
	
	for (var i = food.length-1; i>=0; i--){
		food[i].show();
		if (ball.eat(food[i])){
			food.splice(i,1);
			food.push(new Ball(random(-width,width*2),random(-height,height*2),random(10,20)));
			if (ball.r > maxR){
				maxR = ball.r;
			}
		}
	}
	for (var i = poisonpill.length-1; i>=0; i--){
		poisonpill[i].show();
		if (poisonpill[i].harms(ball)){
			poisonpill.splice(i,1);
			poisonpill.push(new Poison(random(-width,width*2),random(-height,height*2),16));
		}
	}
	if(ball.dead){
		clear();
		gameScreen = 2;
	}
}