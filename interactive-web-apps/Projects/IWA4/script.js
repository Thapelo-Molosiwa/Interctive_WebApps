const year ='2050' // changed variable date to year
const status = 'parent' //changed student to parent and removed semi colons and used equal sign
let count = 0  // count isnt constant 

if (year == 2050) {     // when we add two = signs they tell if the 'if' statement is true or false and give the correct outcome and (changed date to year)
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(year, 'Family Day')
	console.log(year, 'Freedom Day')
	    count = count + 4  // removed  'let' because  count is already decleared 
 
	if (status == "student") {
	  console.log('June', 'Youth Day')
     count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(year, 'Day of Reconciliation')
	 count = count + 3

	if (status == "parent") {
	  console.log(year, 'Christmas Day')
	 count = count + 1
  }

	console.log(year, 'Day of Goodwill')
	count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', year) //changed the variable date to year
console.log('The total holidays is:', count)