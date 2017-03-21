class Utils {
	static clamp(val: number, a: number, b: number){
		if( val < a ){
			return a;
		} else if ( val > b ){
			return b;
		} else {
			return val;
		}
	}

	static randomRange(min: number, max: number){
		return Math.random() * (max - min) + min;
	}
}