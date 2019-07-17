class Pirate {
	constructor(name, job) {
		this.name = name
		this.job = job || 'Scallywag';
		this.cursed = false;
		this.count = 0;
		this.booty = 0;
	}
	commitHeinousAct() {
		this.count ++;
		if (this.count >= 3) {
			this.cursed = true;
		}
		// this.count+=1;
		// this.count = this.count +1;
	}
	robShip() {
		this.booty += 100;
		return 'YAARRR!';
	}
}

// class Pirate {
// 	constructor(name, job='Scallyway'){
// 		this.name = name;
// 		this.job = job;
// 	}
// }

// class Pirate {
// 	conctructor(name, job) {
// 		this.name = name;
// 		this.job = job || 'Scallywag';
// 	}
// }


module.exports = Pirate;