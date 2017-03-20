
/// <reference path="enemy.ts" />

// Define a shorter name for 'CanvasRenderingContext2d'
//
type gContext = CanvasRenderingContext2D;

// Game class
//
class Game {
	
	static width = 800;
	static height = 600;

	canvas: HTMLCanvasElement;
	graphicsContext: gContext;

	enemy: Enemy;

	constructor() {
		
		// Set up canvas
		//
		this.canvas = document.getElementsByTagName('canvas')[0];
		this.canvas.width = Game.width;
		this.canvas.height = Game.height;

		this.graphicsContext = this.canvas.getContext('2d');

		this.enemy = new Enemy(300, 300);
	}

	update() {
		this.enemy.update();
	}

	draw() {
		let g = this.graphicsContext;

		// Clear screen
		g.fillStyle = '#ccc';
		g.fillRect(0, 0, Game.width, Game.height);

		this.enemy.draw(g);
	}
}
