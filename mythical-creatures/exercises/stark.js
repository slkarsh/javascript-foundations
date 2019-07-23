class Stark {
	constructor(name, location) {
		this.name = name;
		this.location = location || 'Winterfell';
		this.safe = false;
		
	}

	houseWords() {
		if (this.safe === false) {
			return `Winter is Coming`;
		} else if (this.safe === true) {
			return `The North Remembers`;
		}


		}
	
}


module.exports = Stark;