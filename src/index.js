//function to update the weather information on the page
function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
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
