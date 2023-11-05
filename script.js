// API URL with key and parameters
//Taking api from open-meteo.com and link is https://open-meteo.com/en/docs#latitude=23.7104&longitude=90.4074&hourly=&daily=temperature_2m_max&timezone=GMT
const url =
  'https://api.open-meteo.com/v1/forecast?latitude=23.7104&longitude=90.4074&daily=temperature_2m_max&timezone=GMT';

// DOM elements
const degree = document.getElementById('degree');
const city = document.getElementById('city');
const country = document.getElementById('country');
const current_date = document.getElementById('current_date');

const dayElements = [
  document.getElementById('date1'),
  document.getElementById('date2'),
  document.getElementById('date3'),
  document.getElementById('date4'),
  document.getElementById('date5'),
];
const ElementsOfTempareture = [
  document.getElementById('temparature1'),
  document.getElementById('temparature2'),
  document.getElementById('temparature3'),
  document.getElementById('temparature4'),
  document.getElementById('temparature5'),
];
console.log(ElementsOfTempareture);

// Fetch forecast data
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    degree.innerHTML = String(data.daily.temperature_2m_max[0]) + '°'; // Setting current temperature
    city.innerHTML = 'Dhaka'; // Setting city name
    country.innerHTML = 'Bangladesh'; // Setting country name
    current_date.innerHTML = `Date is: ${data.daily.time[0]}`; // Setting current date
    console.log(typeof data.daily);

    const len = data.daily.time.length; // Getting length of the array

    for (let i = 0; i < len; i++) {
      dayElements[i].innerHTML = data.daily.time[i];
      ElementsOfTempareture[i].innerHTML = String(data.daily.temperature_2m_max[i]) + "°" +" " +"Celcius";
    }
  })
  .catch((error) => console.log(error));
