class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;

  }
  isWhite(){
    if (this.color !== 'white') {
      return false;
    }
  }

  says(message) {
    return `**;* ${message} *;**`

  }
}





module.exports = Unicorn;






































// class Unicorn {
//   constructor(name, color) {
//   	this.name = name;
//   	if (color === undefined) {
//   		this.color = 'white';
//   	} else {
//   		this.color = color;
//   	}
//   }
//   isWhite() {
//   	if (this.color !== 'white') {
//   		return false;
//   	}
//   }
//   says(string) {
//   	return`**;* ${string} *;**`;
//   }
  	
// }

// module.exports = Unicorn;

//1. Read the test
//2. Ask if it will fail and why
//3. Run test
//4. Make it pass