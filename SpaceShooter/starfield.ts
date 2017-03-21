
/// <reference path="game.ts" />


class Starfield {
	constructor(){
		let numStars = 128;

		let xs = Game.width;
		let ys = Game.height;
		let zs = 10;
		let minZ = 2;

		for(let i = 0; i < numStars; i++){
			let star = new Star(
					Utils.randomRange(0, xs),
					Utils.randomRange(0, ys),
					Utils.randomRange(minZ, minZ + zs)
				);

			// console.log(star);
		}

	}
}

class Star extends GameObject {
	
	x: number;
	y: number;
	z: number;
	speed: number;

	constructor(x: number, y: number, z: number){
		super();

		this.x = x;
		this.y = y;
		this.z = z;

		this.speed = 1;
	}

	update(){
		this.x -= this.speed / this.z;

		if (this.x < - 5){
			this.x += Game.width + Utils.randomRange(5, 20);
		}
	}

	draw(g: gContext){
		let s = 1.5;
		g.fillStyle = 'white';
		g.fillRect(this.x, this.y, s, s);
	}

}
