class Hobbit {
	constructor(name, disposition = 'homebody', age = 0, adult = false, isShort = true) {
		this.name = name;
		this.disposition = disposition;
		this.age = age;
		this.adult = adult;
		this.isShort = isShort;
		this.old = false;
		 if (this.name === 'Frodo') {
		 	this.hasRing = true;
		 } else {
		 	this.hasRing = false;
		 }

	} celebrateBirthday() {
		this.age++;
		if (this.age === 33) {
			this.adult = true;
		} else if (this.age === 101) {
			this.old = true;
		}
	} 
}







module.exports = Hobbit;





































// class Hobbit {
// 	constructor(name, disposition = 'homebody', age = 0, isShort = true) {
// 		this.name = name;
// 		this.disposition = disposition;
// 		this.age = 0;
// 		this.adult = false;
// 		this.isShort = isShort;
// 		this.old = false;
// 		if (this.name === 'Frodo') {
// 			this.hasRing = true;
// 		} else {
// 			this.hasRing = false;
// 		}
// 	}

// 	celebrateBirthday() {
// 		this.age++;
// 		if (this.age === 33) {
// 			this.adult = true;
// 		} else if (this.age === 101) {
// 			 this.old = true;
// 		}

// 	}
	
// }






// module.exports = Hobbit;





































// class Hobbit {
// 	constructor(name){
// 		this.name = name;
// 		this.disposition = "homebody";
// 		this.age = 0;
// 		this.adult = false;
// 		this.isShort = true;
// 		this.old = false;
// 		if (this.name === 'Frodo') {
// 			this.hasRing = true;
// 		} else {
// 			this.hasRing = false;
// 		}
		

// 	}
// 	celebrateBirthday() {
// 		this.age++;
// 		if (this.age === 33) {
// 			this.adult=true;
// 		} else if (this.age === 101) {
// 			this.old = true;
// 		}

// 	}

// }




// module.exports = Hobbit;