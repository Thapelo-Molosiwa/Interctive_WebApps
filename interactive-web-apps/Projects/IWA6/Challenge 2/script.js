const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

if (hourOfDay !== undefined && minuteOfDay !== undefined && hourOfDay === 0 && minuteOfDay === 0) {
	const taxAsDecimal = parseFloat(tax) / 100;
  	const startingAfterTax = salary * (1 - taxAsDecimal);  //the variable starting is not defined and should be replaced with startingAfterTax to match the previous line.
	const balance = startingAfterTax - transport - food - rent; // the variable name balace is misspelled
	
	console.log("R" + balance.toFixed(2)); //toFixed() method returns a string
}
