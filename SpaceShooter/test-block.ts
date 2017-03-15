
/// <reference path="game.ts" />

// Test block class
//
class TestBlock {
	x: number;
	y: number;

	constructor(){
		this.x = 0;
		this.y = 0;
	}

	update(){
		this.x += 1;
		this.y += 1;
	}

	draw(g: gContext){
		g.fillStyle = 'black';
		g.fillRect(this.x, this.y, 20, 20);
	}
}