//function to update the weather information on the page
function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" alt="${response.data.condition.description}">`;
}

//function to format the date and time
function formatDate(date) {
  //get the minutes and hours from the date object
  let minutes = date.getMinutes();
  let hours = date.getHours();
  //array of days of the week
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //get the day of the week
  let day = days[date.getDay()];

  //add a leading zero to minutes if less than 10
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

//function to search for a city
function searchCity(city) {
  let apiKey = "5fob4d70t464d3dd9fbffb3b3b705a8f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

//function to handle the form submission
function handleSearchSubmit(event) {
  event.preventDefault(); //prevents the page from loading again
  let searchInputElement = document.querySelector("#search-form-input");

  searchCity(searchInputElement.value); //calls the function searchCity with the value entered in the search input
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit); //when the form is submitted, it will call the function handleSearchSubmit

searchCity("Ladysmith"); //default city when the page loads
