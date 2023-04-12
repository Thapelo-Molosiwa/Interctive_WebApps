const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';

const divider = '----------------------------------';

// Only change below this line


// let leoNewBalance = leoBalance*-1
// let sarahNewBalance = sarahBalance*-1





const owed = parseFloat(-1*(leoBalance)) + parseFloat(-1*(sarahBalance));
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${parseFloat(-1*(leoBalance)).toFixed(2)})\n`;
const sarah = `${(sarahName.trim())} ${sarahSurname} (Owed: R ${parseFloat(-1*(sarahBalance)).toFixed(2)})\n\n`;
const total = `  Total amount owed: R ${owed.toFixed(2)}\n`;
const result = `\n${leo}${sarah}${divider}\n${total}${divider}`;

console.log(result)

