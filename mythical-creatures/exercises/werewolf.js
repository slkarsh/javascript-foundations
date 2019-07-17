class Werewolf {
	constructor(name, location) {
		this.name = name;
		this.location = location || 'Basement lair';
		this.human = true;
		this.wolf = false;
		this.hungry = false;
		

	}
	change() {
		if (this.human === true) {
			this.wolf = true;
			this.human = false;
			this.hungry = true;
		} else {
			this.wolf = false;
			this.human = true;
			this.hungry = false;
			
			
		}
		
	} 

	eat(victim) {
		if (this.hungry === true) {
			this.hungry = false;
			this.human = true;
			victim.alive = false;
			return true;
		} else {
			return false;
		}
	}
}





module.exports = Werewolf;