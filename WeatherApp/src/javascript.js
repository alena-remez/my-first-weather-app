let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let currentDay = currentDate.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let date = document.querySelector("#current-date");
date.innerHTML = `${days[currentDay]} ${hours}:${minutes}`;
function showWeather(response) {
  document.querySelector("h3").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function enterCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  let apiKey = "97df04f5b907a49a59ae0a990ec0627e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios(apiUrl).then(showWeather);
}
function showLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let unit = "metric";
  let apiKey = "97df04f5b907a49a59ae0a990ec0627e";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${unit}&appid=${apiKey}`;
  axios(url).then(showWeather);
}
let cityInput = document.querySelector("#search-form");
cityInput.addEventListener("submit", enterCity);
let currentButton = document.querySelector("#current-location");
currentButton.addEventListener("click", showLocation);
