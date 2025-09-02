function handleSearchSubmit(event) {
  event.preventDefault(); //prevents the page from loading again
  let searchInputElement = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement.value; //updates the city name to the value entered in the search input
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit); //when the form is submitted, it will call the function handleSearchSubmit
