function Ball(x,y,r){
	this.pos =createVector(x,y);
	this.r = r;
	this.eaten = false;
	this.dead = false;
	this.vel = createVector(0,0); 
	this.update = function(){
		var newvel = createVector(mouseX-width/2, mouseY-height/2);
		newvel.setMag(3);
		this.vel.lerp(newvel, 0.2);
		this.pos.add(this.vel);
		if (this.r < 10){
		this.dead = true;
		}
	}
	this.eat = function(other){
		var d = p5.Vector.dist(this.pos, other.pos);
			if (d<this.r+other.r){
				this.r = sqrt(this.r*this.r+other.r*other.r);
				foodCount+=1;
				return true;
		}else{
			return false;
		}	
	}
	this.show = function() {
		fill(0,200,200);
		noStroke();
		ellipse(this.pos.x,this.pos.y,this.r*2,this.r*2);
	}
}