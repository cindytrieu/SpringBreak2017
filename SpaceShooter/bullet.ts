/// <reference path="gameObject.ts" />


class Bullet extends GameObject{

	x: number;
	y: number;
	speed: number;
	size: number;

	constructor(x: number, y: number){
		super();
		this.x = x;
		this.y = y;
		this.speed = 10;
		this.size = 10;
	}

	update(){
		this.x += this.speed;

		if(this.x > Game.width){
			this.destroy();
		}
	}

	draw(g: gContext){
		g.fillStyle = "blue";
		g.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
	}


}