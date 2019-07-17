class Wizard {
	constructor(wizardObj) {
		this.name = wizardObj.name;
	 	if (wizardObj.bearded === undefined) {
			this.bearded = true;
		} else {
			this.bearded = wizardObj.bearded;
		}
		this.rested = true;
		this.spellCounter = 0;

	}

	incantation(aSpell) {
		return `${aSpell.toUpperCase()}`

	}

	cast(spellCast) {
		this.spellCounter++;
		if (this.spellCounter < 3) {
			console.log(this.spellCounter);
			console.log(spellCast);
			this.rested = true;
			return `${spellCast.toUpperCase()}`
		} else {
			this.rested = false;
			return `I SHALL NOT CAST!`
		}
	}
}




module.exports = Wizard;