const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),


    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
 
}

const christmas = 6
const futureId = 9

// Do not change code above this comment




if(holidays.futureId){       // the code is working

    console.log(holidays.futureId.name)
}else{
    console.log("ID 9 not created yet")
}

const copied = {
    6: {
        id: 6,
        name: 'X-mas',
        date: new Date(`25 December ${currentYear} 00:00`),


    },

}


const correctDate = copied



if(copied[6].date < holidays[6].date){   

    console.log('new date is earlier : true')
}else{
    console.log('false')
}



if(holidays[6].id == copied[6].id){

    console.log('ID change: false')
}else{ 

    console.log(copied[6].id)
}



if(holidays[6].name == copied[6].name){

    console.log('Name change: false')
}else{ 

    console.log(`Name change: ${copied[6].name} `)
}




if(holidays[6].date == copied[6].date){

    console.log('Date change: false')
}else{ 

    console.log(`Date change: ${copied[6].date} `)  
}






// Find the first and last holiday in the year and a random holiday date
let firstHoliday, lastHoliday, randomHoliday;
for (const holiday of Object.values(holidays)) {
  const holidayDate = new Date(holiday.date);
  if (!firstHoliday || holidayDate < firstHoliday) {
    firstHoliday = holidayDate;
  }
  if (!lastHoliday || holidayDate > lastHoliday) {
    lastHoliday = holidayDate;
  }
}
randomHoliday = new Date(firstHoliday.getTime() + Math.random() * (lastHoliday.getTime() - firstHoliday.getTime()));


// Log the dates in the required format


const CurrentYear = new Date().getFullYear();
console.log(`First holiday: ${firstHoliday.toLocaleDateString("en-ZA", { day: "2-digit", month: "2-digit", year: "numeric" })}/${CurrentYear}`);
console.log(`Last holiday: ${lastHoliday.toLocaleDateString("en-ZA", { day: "2-digit", month: "2-digit", year: "numeric" })}/${CurrentYear}`);
console.log(`Random holiday:${randomHoliday.toLocaleDateString("en-ZA",{day: "2-digit",month: "2-digit", year: "numeric"})}/${CurrentYear}`)










// copied = holidays.christmas
// copied = { name: 'X-mas Day' }
// correctDate = copied.date
// correctDate.hours = 0
// correctDate.minutes = 0
// isEarlier = copied.date < holidays[6].date
// console.log('New date is earlier:', isEarlier)
// if (isEarlier) copied.date = correctDate
// console.log('ID change:', holidays[christmas].id != copied.id || copied.id)
// console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
// console.log('Date change:', holidays[christmas].date != copied.date || copied.date)

// const firstHolidayTimestamp = Math.min(
//     holidays[0].date.getTime,
//     holidays[1].date.getTime,
//     holidays[2].date.getTime,
//     holidays[3].date.getTime,
//     holidays[4].date.getTime,
//     holidays[5].date.getTime,
//     holidays[6].date.getTime,
//     holidays[7].date.getTime,
//     holidays[8].date.getTime,
// )



// const lastHolidayTimestamp = Math.max(
//     holidays[0].date.getTime,
//     holidays[1].date.getTime,
//     holidays[2].date.getTime,
//     holidays[3].date.getTime,
//     holidays[4].date.getTime,
//     holidays[5].date.getTime,
//     holidays[6].date.getTime,
//     holidays[7].date.getTime,
//     holidays[8].date.getTime,
// )

// const firstDay = firstHolidayTimestamp.getDate
// const firstMonth = firstHolidayTimestamp.getMonth
// const lastDay = lastHolidayTimestamp.getDate
// const lastMonth = lastHolidayTimestamp.getMonth

// console.log('{firstDay}/{firstMonth}/{currentYear}')
// console.log('{lastDay}/{lastMonth}/{currentYear}')

// const randomHoliday = holidays[Math.random]
// console.log(randomHoliday.date)