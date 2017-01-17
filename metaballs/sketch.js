var blobs = [];

function setup(){
	createCanvas(640,640);
	background(51);
	pixelDensity(1);
	colorMode(HSB);
	for (var i = 0; i < 5; i++){
		blobs[i] = new Blob(random(width), random(height), random(100,150));
	}
}

function draw(){
	loadPixels();

	for (var x = 0; x < width; x++){
		for (var y = 0; y < height; y++){
			var index = 4*(x + y*width);
			var sum = 0;
			for (var z = 0; z < blobs.length; z++){
				var d = dist(x,y,blobs[z].pos.x,blobs[z].pos.y);
				sum += (10 * blobs[z].r / d);
			}
			pixels[index] = sum;
			pixels[index+1] = 255;
			pixels[index+2] = 255;
			pixels[index+3] = 0;
		}
	}
	updatePixels();

	for (var i = 0; i < blobs.length; i++){
		blobs[i].update();
		//blobs[i].show();
	}
}
