/// <reference path="game.ts" />

class Player {
	x: number;
	y: number;
	speed: number;
	min: number;
	size: number;

	constructor(){
		this.x = 100;
		this.y = Game.height/2;
		this.speed = 4;
		this.min = 25;
		this.size = 20;
	}

	update(){
		if(input.isKeyDown(Input.keyCodeLeft)){
			this.x -= this.speed;
		} 
		if (input.isKeyDown(Input.keyCodeUp)){
			this.y -= this.speed;
		}
		if (input.isKeyDown(Input.keyCodeRight)){
			this.x += this.speed;
		}
		if (input.isKeyDown(Input.keyCodeDown)){
			this.y += this.speed;
		}
		this.x = Utils.clamp(this.x, this.min, Game.width - this.min);
		this.y = Utils.clamp(this.y, this.min, Game.height - this.min);
	}

	draw(g: gContext){
		g.fillStyle = "white";
		g.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
	}
}