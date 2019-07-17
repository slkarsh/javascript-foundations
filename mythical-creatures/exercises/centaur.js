class Centaur {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.actionCounter = 0;
		this.layingDown = false;

	}

	shoot() {	
		this.checkCranky();
		if (this.cranky === false && this.layingDown === false) {
			return `Twang!!!`
		} else {
			return 'NO!'
		}
	}

	run() {
		this.checkCranky();
		if (this.layingDown === false) {
			return `Clop clop clop clop!!!`;
		} else {
			return 'NO!';
		}	
	}

	checkCranky() {
		this.actionCounter++;
		if (this.actionCounter >= 3) {
			this.cranky = true;
		}

	}

	sleep() {
		this.cranky = false;
		this.actionCounter = 0;
		if (this.standing === true) {
			return 'NO!';
		} else {
			return `ZZZZ`;
		}
	}

	layDown() {
		this.standing = false;
		this.layingDown = true;
	}

	standUp() {
		this.standing = true;
		this.layingDown = false;

	}

	drinkPotion() {
		if (this.layingDown === true) {
			return `Not while I'm laying down!`
		} else if (this.actionCounter < 3) {
			this.cranky = true;
		} else {
			this.cranky = false;
		}
	}


	
}


module.exports = Centaur;