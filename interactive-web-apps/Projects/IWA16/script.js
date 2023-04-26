// const MONTHS = [
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//     'Sep',
//     'Oct',
//     'Nov',
//     'Dec',
//   ]
  
//   const data = {
//     response: {
//       requestType: "FETCH_ATHLETE_DATA",
//       requestBy: "ALL_MATCHING_ATHLETES",
//       forDisplay: "BEST_RACES",
  
//       data: {
//         NM372: {
//           firstName: "Nwabisa",
//           surname: "Masiko",
//           id: "NM372",
//           races: [
//             {
//               date: '2022-11-18T20:00:00.000Z',
//               time: [9, 7, 8, 6],
//             },
//             {
//               date: '2022-12-02T20:00:00.000Z',
//               time: [6, 7, 8, 7],
//             },
//           ],
//         },
  
//         SV782: {
//           firstName: "Schalk",
//           surname: "Venter",
//           id: "SV782",
//           races: [
//             {
//               date: '2022-11-18T20:00:00.000Z',
//               time: [10, 8, 3, 12],
//             },
//             {
//               date: '2022-11-25T20:00:00.000Z',
//               time: [6, 8, 9, 11],
//             },
//             {
//               date: '2022-12-02T20:00:00.000Z',
//               time: [10, 11, 4, 8],
//             },
//             {
//               date: '2022-12-09T20:00:00.000Z',
//               time: [9, 8, 9, 11],
//             },
//           ],
//         },
//       },
//     },
//   };
  
//   // Only edit below this comment
  
//   // const createHtml = (athlete) => {
//   //   firstName, surname, id, races = athlete
//   //   [date], [time] = races.reverse()
  
//   //   const fragment = document.createDocumentFragment();
  
//   //   title = document.createElement(h2);
//   //   title= id;
//   //   fragment.appendChild(title);
  
//   //   const list = document.createElement(dl);
  
//   //   const day = date.getDate();
//   //   const month = MONTHS[date.month];
//   //   const year = date.year;
  
//   //   first, second, third, fourth = timeAsArray;
//   //   total = first + second + third + fourth;
  
//   //   const hours = total / 60;
//   //   const minutes = total / hours / 60;
  
//   //   list.innerHTML = /* html */ `
//   //     <dt>Athlete</dt>
//   //     <dd>${firstName surname}</dd>
  
//   //     <dt>Total Races</dt>
//   //     <dd>${races}</dd>
  
//   //     <dt>Event Date (Latest)</dt>
//   //     <dd>${day month year}</dd>
  
//   //     <dt>Total Time (Latest)</dt>
//   //     <dd>${hours.padStart(2, 0) minutes}</dd>
//   //   `;
  
//   //   fragment.appendChild(list);
//   // }
  
//   // [NM372], [SV782] = data
//   // document.querySelector(NM372).appendChild(createHtml(NM372));
//   // document.querySelector(SV782).appendChild(createHtml(SV782));



const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment
//Inserted an object as an input parameter and extracted firstName, surname, id and races using the destructuring assignment
//I.e. inserted all the info related to the athlete in the const, so that I can insert it in html as well


const createHtml = (athlete) => { //this function takes an athlete object as an argument and returns an HTML string.

  const { firstName, surname, id, races } = athlete; //This uses object destructuring to extract firstName, surname, id, and races properties from the athlete object.

  const latestRace = races[races.length - 1];
  const { date, time } = latestRace; // This extracts the date and time properties from the latest race in the races array.


//used the array-reverse method in time, so that it could display first - fourth
  const [fourth, third, second, first] = time.reverse();  //This uses array destructuring to extract the four time values from the time array in reverse order, so that the first value corresponds to the first place in the race.


  const total = first + second + third + fourth;

  const hours = Math.floor(total / 60);
  //used the modulus operator (%), which returns the remainder of an hour (60Min)


  const minutes = total % 60;

  // This calculates the total time taken for the latest race and formats it as hours and minutes.

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]; 
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const monthIndex = dateObj.getMonth();
  const year = dateObj.getFullYear();
  
  const formattedDate = `${months[monthIndex]} ${day}, ${year}`;

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  const section = document.querySelector(`[data-athlete="${id}"]`);
  //created an element of (h2) for the id
  const title = document.createElement('h2');
  title.textContent = id;
  section.appendChild(title);

  const list = document.createElement('dl');

  const fullnameTerm = document.createElement('dt');
  fullnameTerm.textContent = 'Full Name';
  const fullnameDef = document.createElement('dd');
  fullnameDef.textContent = `${firstName} ${surname}`;
  list.appendChild(fullnameTerm);
  list.appendChild(fullnameDef);

  const racesTerm = document.createElement('dt');
  racesTerm.textContent = 'Total Races';
  const racesDef = document.createElement('dd');
  racesDef.textContent = races.length;
  list.appendChild(racesTerm);
  list.appendChild(racesDef);
//created the label of the date needed using the (dt) element
  const latestRaceTerm = document.createElement('dt');
  latestRaceTerm.textContent = 'Event Date (Latest)';
  //created the actual value of of the date needed using the (dd) element
  const latestRaceDef = document.createElement('dd');
  latestRaceDef.textContent = formattedDate;
  list.appendChild(latestRaceTerm);
  list.appendChild(latestRaceDef);

  const latestTimeTerm = document.createElement('dt');
  latestTimeTerm.textContent = 'Total Time (Latest)';
  const latestTimeDef = document.createElement('dd');
  latestTimeDef.textContent = formattedTime;
  list.appendChild(latestTimeTerm);
  list.appendChild(latestTimeDef);
//used (appendChild) to synchronize dt and dd
  section.appendChild(list);
};

const athletes = Object.values(data.response.data);
athletes.forEach((athlete) => createHtml(athlete));