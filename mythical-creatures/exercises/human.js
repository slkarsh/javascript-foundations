class Human {
	constructor(name) {
		this.name = name;
		this.encounterCounter = 0;
		this.knockedOut = false;
	}
	noticesOgre() {
		if (this.encounterCounter < 3) {
			return false;
		} else if (this.encounterCounter === 3) {
			return true;
		} else if (this.encounterCounter > 3 && this.encounterCounter < 6) {
			return false
		} else {
			return true;
		}
		}
	
}

module.exports = Human;