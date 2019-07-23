class Sphinx {
	constructor() {
		this.name = null;
		this.riddles = [];
		this.heroesEaten = [];
	}

	collectRiddle(riddle) {
		this.riddles.push(riddle);
		if (this.riddles.length > 3) {
			this.riddles.shift();
		}
	}

	attemptAnswer(answer) {
		for (var i = 0; i < this.riddles.length; i++) {
			if (this.riddles[i].answer === answer && this.riddles.length > 1) {
				this.riddles.splice(i,1);
				return `That wasn\'t that hard, I bet you don\'t get the next one`
			} else if (this.riddles[i].answer === answer && this.riddles.length === 1) {
				this.riddles.splice(i,1);
				return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
				// this.riddles[i].answer !== answer) {
			}
			}
			if (!this.riddles.includes(answer)) {
				this.heroesEaten++;

			}
		}







		// var riddleCount = this.riddles.length;
		// this.riddles = this.riddles.filter(riddle => riddle.answer !== answer);
		// var newCount = this.riddles.length;
		// if (!this.riddles.length) {
		// 	return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
		// } else if (riddleCount !== nowCount) {
		// 	return "That wasn\'t that hard, I bet you don\'t get the next one"
		// } else {
		// 	this.heroesEaten++;
		// }








	}









// class Sphinx {
// 	constructor() {
// 		this.name = null;
// 		this.riddles = [];
// 		this.heroesEaten = [];

// 	}

// 	collectRiddle(riddle) {
// 		this.riddles.push(riddle);
// 		if (this.riddles.length > 3) {
// 			this.riddles.shift()
// 		}
// 	}

// 	attemptAnswer(answer) {
// 		for (var i = 0; i < this.riddles.length; i++) {
// 			if (this.riddles[i].answer === answer) {
// 				this.riddles.splice(i,1);
// 			}
// 		}


		// for (var i = 0; i < this.riddles.length; i++) {
		// 	if(this.riddles[i].answer === answer) {
		// 		this.riddles.splice(i, 1);
		// 		return `'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS ${answer}??'`
		// 	} else if (this.riddles[i].answer === answer ) {
		// 		this.riddles.splice(i, 1);
		// 		return `That wasn\'t that hard, I bet you don\'t get the next one`
		// 	} else if (this.riddles[i].answer !== answer) {
		// 		this.heroesEaten++

		// 	}
		// }
			
		
// 		}

// )};

module.exports = Sphinx;




// collectRiddle(riddle) {
// 	if (this.riddles.length === 3) {
// 		this.riddles.shift();
// 	}
// 	this.riddles.push(riddle);
// }

// attemptAnswer(answer) {
// 	this.riddles.forEach(function(riddle) {
	// if (riddle.answer === answer) {
		// this.riddle.splice(i, 1);
	// }
// })
// }