class Dragon {
	constructor(name, rider, color, hungry = true) {
		this.name = name;
		this.rider = rider;
		this.color = color;
		this.hungry = hungry;
		this.eatTimes = 0;

	}
	eat() {
		this.eatTimes++;
		if (this.eatTimes > 2) {
			return this.hungry = false;
		} else {
			return this.hungry = true;
		}

	}
}




module.exports = Dragon;





































// class Dragon  {
// 	constructor(name, rider, color) {
// 		this.name = name;
// 		this.rider = rider;
// 		this.color = color;
// 		this.hungry = true;
// 		this.eatCounter = 0;
// 	}

// 	eat() {
// 		if (this.eatCounter < 2) {
// 			this.eatCounter++;
// 		} else {
// 			return this.hungry = false;
// 		}

// 	}
// }



// module.exports = Dragon;