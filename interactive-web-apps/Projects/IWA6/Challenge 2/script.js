const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if ((hourOfDay !== null) && (minuteOfDay !== null) || (hourOfDay === 00 && minuteOfDay === 00)) { /// missing brackets
	const taxAsDecimal = parseFloat(tax) / 100;
  	const startingAfterTax = salary * (1 - taxAsDecimal);  //the variable starting is not defined and should be replaced with startingAfterTax to match the previous line.
	const balance = startingAfterTax - transport - food - rent; // the variable name balace is misspelled.... startingaftertax waas not defined and had to match the previous line
	
	console.log("R" + balance.toFixed(2)); //toFixed() method returns a string
}
