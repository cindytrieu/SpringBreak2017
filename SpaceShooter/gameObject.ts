class GameObject{

	static allGameObjects: Array<GameObject> = [];

	constructor(){
		GameObject.allGameObjects.push(this);
	}

	destroy(){
		let index = GameObject.allGameObjects.indexOf(this, 0);
		if (index > -1){
			GameObject.allGameObjects.splice(index, 1);
		}
	}

	update(){

	}

	draw(g: gContext){

	}

	static updateAllObjects(){
		for(let o of GameObject.allGameObjects){
			o.update();
		}
	}

	static drawAllObjects(g: gContext){
		for(let o of GameObject.allGameObjects){
			o.draw(g);
		}
	}


}