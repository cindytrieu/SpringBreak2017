/*
         MAIN.TS
AUTHORS: Cindy Trieu, Mark Gardner
COPYRIGHT 2017
*/

/// <reference path="game.ts" />


let game: Game;

window.onload = function(){

	// Create the game
	//
	game = new Game();

	// Main loop
	//
	window.setInterval(function(){
		game.update();
		game.draw();
	}, 1000/30);
}
