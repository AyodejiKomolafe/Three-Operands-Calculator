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
	const num3 = Number(tokens[3]);
 console.log(tokens, input)
	if (mathSymbol === "+"){
		console.log(num1 + num2 + num3);
	}
	if (mathSymbol === "*"){
		console.log(num1 * num2 * num3);
	}
	if (mathSymbol === "-"){
		console.log(num1 - num2 - num3);
	}

	if (mathSymbol === "/"){
		console.log(num1 / num2 / num3);
	}

	if (mathSymbol === "sqrt"){
		console.log(Math.sqrt(num1),Math.sqrt(num2),Math.sqrt(num3));
	}

	if (mathSymbol === "cuberoot"){
		console.log(Math.cbrt(num1),Math.cbrt(num2),Math.cbrt(num3));
	}
	if (mathSymbol === "rtp"){
		console.log(num1 ** num2 ** num3);
	}
	if (mathSymbol === "rmd"){
		console.log(num1 % num2 % num3);
	}



	// console.log("mathSymbol");
	// console.log("num1");
	// console.log("num2");
	// This line closes the connection to the command line interface.
	reader.close()

});
