/// <reference path="game.ts" />
/// <reference path="gameObject.ts" />


class Player extends GameObject {
	x: number;
	y: number;
	speed: number;
	min: number;
	size: number;
	reload: number;
	reloadTime: number;

	constructor(){
		super();
		this.x = 100;
		this.y = Game.height/2;
		this.speed = 6;
		this.min = 50;
		this.size = 40;
		this.reload = 0;
		this.reloadTime = 5;
	}

	update(){
		this.reload--;

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

		if(input.isKeyDown(Input.keyCodeZ) && this.reload <= 0){
			this.shoot();
			this.reload = this.reloadTime;
		}
	}

	shoot(){
		let b = new Bullet(this.x, this.y);
	}

	draw(g: gContext){
		g.fillStyle = "white";
		g.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
	}
}