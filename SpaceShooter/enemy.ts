
class Enemy {

	x: number;
	y: number;
	size: number;

	constructor(x: number, y: number){
		this.x = x;
		this.y = y;
		this.size = 30;
	}

	update(){
		
	}

	draw(g: CanvasRenderingContext2D){

		let x = this.x;
		let y = this.y;
		let size = this.size;
		let dotSize = this.size * .75;

		g.fillStyle = 'red';
		g.fillRect(x - size/2, y - size/2, size, size);
		g.fillStyle = '#a00';
		g.fillRect(x - dotSize/2, y - dotSize/2, dotSize, dotSize);
	}

}
