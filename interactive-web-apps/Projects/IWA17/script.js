// // const MONTHS = [
// //     'January',
// //     'February',
// //     'March',
// //     'April',
// //     'May',
// //     'June',
// //     'July',
// //     'August',
// //     'September',
// //     'October',
// //     'November',
// //     'December',
// // ]

// // const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// // // Only edit below 

// // const createArray = (length) => {
// //     const result = []

// //     for (0, i, length) {
// //         result
// //     }
// // }

// // const createData = () => {
// //     const current = new Date
// //     current.setDate(1)

// //     startDay = current.day
// //     daysInMonth = getDaysInMonth(current)

// //     weeks = createArray(5)
// //     days = createArray(7)
// //     value = null

// //     for (weekIndex in weeks) {
// //         value = [{
// //             week: weekIndex + 1,
// //             days: []
// //         }]

// //         for (dayIndex in days) {
// //             value = dayIndex - startDay
// //             isValid = day > 0 && day <= daysInMonth

// //             result[weekIndex].days = [{
// //                 dayOfWeek: dayIndex + 1,
// //                 value: isValid && day,
// //             }]
// //         }
// //     }
// // }

// // const addCell = (existing, classString, value) => {
// //     const result = /* html */ `
// //         <td ${classString}>
// //             ${value}
// //         </td>

// //         ${existing}
// //     `
// // }

// // const createHtml = (data) => {
// //     let result = ''

// //     for (week, days in data) {
// //         let inner = ""
// //         addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
    
// //         for (dayOfWeek, value in days) {
// //             classString = table__cell
// // 						isToday = new Date === value
// //             isWeekend = dayOfWeek = 1 && dayOfWeek == 7
// //             isAlternate = week / 2

// //             let classString = 'table__cell'

// // 						if (isToday) classString = `${classString} table__cell_today`
// //             if (isWeekend) classString === '{classString} table__cell_weekend'
// //             if (isAlternate) classString === '{classString} table__cell_alternate'
// //             addCell(inner, classString, value)
// //         }

// //         result = `<tr>${inner}</tr>`
// //     }
// // }

// // // Only edit above

// // const current = new Date()
// // document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

// // const data = createData()
// // document.querySelector('[data-content]').innerHTML = createHtml(data)











// // scripts.js

// // Get the current date
// const currentDate = new Date();

// // Get the current year and month
// const currentYear = currentDate.getFullYear();
// const currentMonth = currentDate.getMonth();

// // Get the first day of the current month
// const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

// // Get the number of days in the current month
// const numberOfDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

// // Get the table body
// const tableBody = document.querySelector("[data-content]");

// // Create the calendar data
// function createData() {
//   const data = [];

//   let week = [];
//   let dayOfMonth = 1;

//   // Add empty cells for the first week
//   for (let i = 0; i < firstDayOfMonth; i++) {
//     week.push("");
//   }

//   // Add cells for the rest of the days in the month
//   for (let i = firstDayOfMonth; i < 7; i++) {
//     week.push(dayOfMonth);

//     if (dayOfMonth === numberOfDaysInMonth) {
//       break;
//     }

//     dayOfMonth++;
//   }

//   data.push(week);

//   while (dayOfMonth <= numberOfDaysInMonth) {
//     week = [];

//     for (let i = 0; i < 7; i++) {
//       if (dayOfMonth > numberOfDaysInMonth) {
//         week.push("");
//       } else {
//         week.push(dayOfMonth);

//         if (dayOfMonth === currentDate.getDate()) {
//           week[i] = { day: dayOfMonth, isToday: true };
//         } else {
//           week[i] = { day: dayOfMonth, isToday: false };
//         }

//         dayOfMonth++;
//       }
//     }

//     data.push(week);
//   }

//   return data;
// }

// // Create a table cell for a day
// function createCell(day) {
//   const cell = document.createElement("td");
//   cell.classList.add("table__cell");

//   if (day === "") {
//     cell.classList.add("table__cell_sidebar");
//   } else if (day.isToday) {
//     cell.classList.add("table__cell_today");
//   } else if (day.day % 7 === 0 || day.day % 7 === 6) {
//     cell.classList.add("table__cell_weekend");
//   }

//   cell.textContent = day.day;

//   return cell;
// }

// // Create the HTML for the calendar
// function createHtml() {
//   // Set the title of the calendar
//   const title = document.querySelector("[data-title]");
//   title.textContent = `${currentDate.toLocaleString("default", {
//     month: "long",
//   })} ${currentYear}`;

//   // Create the calendar data
//   const data = createData();

//   // Create the HTML for the calendar
//   let html = "";

//   for (let i = 0; i < data.length; i++) {
//     const week = data[i];

//     html += "<tr>";

//     // Add the week number
//     html += `<td class="table__cell table__cell_sidebar">Week ${i + 1}</td>`;

//     // Add the days of the week
//     for (let j = 0; j < 7; j++) {
//       html += createCell(week[j]).outerHTML;
//     }

//     html += "</tr>";
//   }

//   // Set the HTML for the table body
//   tableBody.innerHTML = html;
// }

// // Call the createHtml function to create the calendar
// createHtml();












const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()


// Only edit below


const createArray = (length) => {  // I used this parameter to determine the size of the array that the function will create.
    const result = [];
    for (let i = 0; i < length; i++) { //  I used a for loop to repeat length number of times. 
        result.push(i); // current value of i is pushed into the result array using the push() method. Since i starts at 0 and increments by 1 with each iteration, 
    }
    return result;
};


const createData = function(){ // this function is to create an array that presents a calender month
    const current = new Date();   // Create a new date object representing the current date
    current.setDate(1);   // Set the day of the month to 1
    const startDay = current.getDay();  // Get the day of the week for the 1st day of the month
    const daysInMonth = getDaysInMonth(current);// Get the number of days in the current month
    const weeks = createArray(5);
    const days = createArray(7);
     let result = [] //value = null ... Initialize an empty array to store the final result


    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) { // Iterate over each week
        let value = {
            week: weekIndex + 1,
            days: []
        };
        for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
            const day = (weekIndex * 7) + dayIndex - startDay + 1;
            const isValid = day > 0 && day <= daysInMonth;
            let classString = 'table__cell';
            if (dayIndex === 0 || dayIndex === 6) {
                classString += 'table__cell_weekend';
            }
             value.days.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : '',
                class: classString,
             });
            }
            weeks[weekIndex] = value;
        }
        return weeks;
};


const addCell = function(existing, classString, value) {
    return `${existing}<td class="${classString}">${value}</td>`;
};



const createHtml = function(data) {
    let result = '';
    for (let i = 0; i < data.length; i++) {
      const week = data[i];
      let inner = '';
      inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`);
      for (let j = 0; j < week.days.length; j++) {
        const day = week.days[j];
        let classString = 'table__cell';
        const currentDate = new Date();
        const isToday = currentDate.getDate() === day.value && currentDate.getMonth() === currentDate.getMonth();
        const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
        const isAlternate = week.week % 2 === 0;
        if (isToday) {
          classString = `${classString} table__cell_today`;
        }
        if (isWeekend) {
          classString = `${classString} table__cell_weekend`;
        }
        if (isAlternate) {
          classString = `${classString} table__cell_alternate`;
        }
        inner = addCell(inner, classString, day.value || '');
      }
      result += `<tr>${inner}</tr>`;
    }
    return result;
  };


// Only edit above
const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`
const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)
