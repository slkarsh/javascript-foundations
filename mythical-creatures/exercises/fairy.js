class Fairy {
	constructor(name, dust) {
		this.name = name;
		this.dust = dust || 10;
		this.clothes = {dresses: ['Iris']};
		this.disposition = 'Good natured';
		this.humanWards = [];
	}

	receiveBelief() {
		this.dust++
	}

	believe() {
		this.dust+=10;
	}

	makeDresses(flower) {
		var moreClothes = this.clothes.dresses.concat(flower);
		this.clothes.dresses = moreClothes;
	}

	provoke() {
		this.disposition = 'Vengeful';
	}

	replaceInfant(infantObj) {
		if (this.disposition === 'Vengeful') {
			infantObj.disposition = 'Malicious';
			this.humanWards.push(infantObj);
		} if (this.humanWards.length > 2) {
			this.disposition = 'Good natured';
		}

		 else {
			return infantObj;
		}

	}
}


module.exports = Fairy;