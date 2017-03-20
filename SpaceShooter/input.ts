
class Input {
	static keyCodeLeft = 	37;
	static keyCodeUp = 		38;
	static keyCodeRight = 	39;
	static keyCodeDown = 	40;

	private keysDown: {[id: number]: boolean};

	constructor(){
		this.keysDown = {};
		var that = this;
		window.addEventListener("keydown", function(e){
			that.keysDown[e.keyCode] = true;
		});
		window.addEventListener("keyup", function(e){
			that.keysDown[e.keyCode] = false;
		});
	}

	isKeyDown(code: number){
		return this.keysDown[code];
	}

}

let input = new Input();