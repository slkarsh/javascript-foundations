class Medusa {
	constructor(name) {
		this.name = name;
		this.statues = [];
		// this.victimCount = 0;
	}

	stare(victim) {
		victim.stoned++;
		this.statues.push(victim);
		if (this.statues.length >= 4) {
			var freeVictim = this.statues.shift();
			freeVictim.stoned = false;
	
		}

	}
}

module.exports = Medusa;