const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
 console.log(tokens, input)
	if (mathSymbol === "+"){
		console.log(num1 + num2);
	}
	if (mathSymbol === "*"){
		console.log(num1 * num2);
	}
	if (mathSymbol === "-"){
		console.log(num1 - num2);
	}

	if (mathSymbol === "/"){
		console.log(num1 / num2);
	}

	if (mathSymbol === "sqrt"){
		console.log(Math.sqrt(num1));
	}

	if (mathSymbol === "cuberoot"){
		console.log(Math.cbrt(num1));
	}
	if (mathSymbol === "rtp"){
		console.log(num1 ** num2);
	}
	if (mathSymbol === "rmd"){
		console.log(num1 % num2);
	}



	// console.log("mathSymbol");
	// console.log("num1");
	// console.log("num2");
	// This line closes the connection to the command line interface.
	reader.close()

});
