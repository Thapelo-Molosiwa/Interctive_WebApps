const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// // Only change below this line






// const isNumeric = str => /^\d+$/.test(str);  //The isNumeric function checks if a given string contains only numeric characters using a regular expression. This eliminates the need to repeat the same regular expression twice in the code.

// console.log('Primary phone is valid numerical string:', isNumeric(primaryPhone));
// console.log('Secondary phone is valid numerical string:', isNumeric(secondaryPhone));




const primaryValid = /^\d+$/.test(primaryPhone)
const secondaryValid = /^\d+$/.test(secondaryPhone)


console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )
