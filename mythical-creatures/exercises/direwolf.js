class Direwolf {
	constructor(name, home, size) {
		this.name = name;
		this.home = home || 'Beyond the Wall';
		this.size = size || 'Massive';
		this.starksToProtect = [];
		this.huntsWithWhiteWalkers = true;
		this.huntsWhiteWalkers = true;
	}




	protect(stark) {
		if (this.home === stark.location && this.starksToProtect.length < 2){
			this.starksToProtect.push(stark);
			stark.safe = true;
			this.huntsWhiteWalkers = false;
		}
	}

	leave(stark) {
		this.starksToProtect.pop(stark);
		stark.safe = false;

	}

	// unprotect(stark) {
	// 	if (this.home !== stark.location) {
	// 	for (var i = 0; i < this.starksToProtect.length; i++) {
	// 		this.starksToProtect.splice(i,1);
	// 		stark.safe = false;
	// 	}
	// }
	// }

		// for (var i = 0; i < this.starksToProtect.length; i++) {
		// 	if (this.location === this.starksToProtect[i].location) {
		// 		return true;
		// 	} else {
		// 		this.starksToProtect.splice(i, 1);
		// 	}
		// }
	
}

module.exports = Direwolf;