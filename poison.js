function Poison(x,y,r){
	this.pos = createVector(x,y);
	this.r = r;
	this.eaten = false;

	this.harms= function(ball){
		var d = p5.Vector.dist(this.pos, ball.pos);
			if (d<this.r+ball.r){
				ball.r *= 0.84;
				poisonCount+=1;
				return true;
		}else{
			return false;
		}	
	}
	this.show = function() {
		fill(255,0,0);
		ellipse(this.pos.x,this.pos.y,this.r*2,this.r*2);
	}
}