class Vampire {
	constructor(name, pet = 'bat', thirsty = true) {
		this.name = name;
		this.pet = pet;
		this.thirsty = thirsty;
	}
	drink() {
		this.thirsty = false;
	}
}



module.exports = Vampire;






































// class Vampire {
//   constructor(name, pet, thirsty) {
//   	this.name = name;
//   	this.pet = pet || 'bat';
//   	this.thirsty = true;
//   }
  
//   drink() {
//   	this.thirsty = false;
//   }
  	

// }
// module.exports = Vampire;

//1. Read the test
//2. Ask if it will fail and why
//3. Run test
//4. Make it pass