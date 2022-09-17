/*let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};*/

function formatDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDate = new Date();
  let currentDay = days[currentDate.getDay()];
  let currentHour = currentDate.getHours();
  let currentMinute = currentDate.getMinutes();
  if (currentHour < 10) currentHour = `0${currentHour}`;
  if (currentMinute < 10) currentMinute = `0${currentMinute}`;
  let showDate = document.querySelector(".currentDateTime");
  showDate.innerHTML = `${currentDay} ${currentHour}:${currentMinute}`;
}

formatDate();

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#cityName");
  let city = input.value.toLowerCase();
  let cityNamePage = document.querySelector("#cityOnPage");
  cityNamePage.innerHTML = capitalizeFirstLetter(city);
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;

  function showTemperature(response) {
    let currentTemp = Math.round(response.data.main.temp);
    let showTempUser = document.querySelector("#tempValue");
    showTempUser.innerHTML = currentTemp;
    let currentHumidity = response.data.main.humidity;
    let humidity = document.querySelector("#humidityValue");
    humidity.innerHTML = currentHumidity;
    let currentSpeed = Math.round(response.data.wind.speed);
    let wind = document.querySelector("#windValue");
    wind.innerHTML = ` ${currentSpeed}`;
    let currentWeather = response.data.weather[0].main;
    let weather = document.querySelector("#weatherValue");
    weather.innerHTML = currentWeather;
  }

  axios.get(apiUrl).then(showTemperature);
}

function currentPositionWeather(event) {
  function showTemperatureGps(response) {
    let city = response.data.name;
    let cityNamePage = document.querySelector("#cityOnPage");
    cityNamePage.innerHTML = city;

    let currentTemp = Math.round(response.data.main.temp);
    let showTempUser = document.querySelector("#tempValue");
    showTempUser.innerHTML = currentTemp;
    let currentHumidity = response.data.main.humidity;
    let humidity = document.querySelector("#humidityValue");
    humidity.innerHTML = currentHumidity;
    let currentSpeed = Math.round(response.data.wind.speed);
    let wind = document.querySelector("#windValue");
    wind.innerHTML = ` ${currentSpeed}`;
    let currentWeather = response.data.weather[0].main;
    let weather = document.querySelector("#weatherValue");
    weather.innerHTML = currentWeather;

  }
  function currentPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let unit = "metric";
    let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showTemperatureGps);
  }
  navigator.geolocation.getCurrentPosition(currentPosition);
}
let form = document.querySelector(".searchForm");
form.addEventListener("submit", searchCity);

let formCurrent = document.querySelector("#positionButton");
formCurrent.addEventListener("click", currentPositionWeather);

/* function cToF(temp) {
  var cTemp = temp;
  var cToFahr = (cTemp * 9) / 5 + 32;
  return cToFahr;
}

 let temp = document.querySelector("#tempValue");
  let tempValue = document.getElementById("tempValue").innerText;

  function showCelsius(event) {
    event.preventDefault();
    temp.innerHTML = tempValue;
  }

  function showFaren(event) {
    event.preventDefault();
    temp.innerHTML = Math.round(cToF(tempValue));
  }

  let celsius = document.querySelector("#linkCeksius");
  celsius.addEventListener("click", showCelsius);
  let farengeit = document.querySelector("#linkFaren");
  farengeit.addEventListener("click", showFaren);
function displayTemperature(weather, city) {
  let cities = Object.keys(weather);

  if (cities.includes(city) && city === "paris") {
    alert(
      `It is currently ${Math.round(weather.paris.temp)}°C (${Math.round(
        cToF(weather.paris.temp)
      )}°F) in ${
        city.charAt(0).toUpperCase() + city.slice(1)
      } with a humidity of ${Math.round(weather.paris.humidity)}%`
    );
  } else if (cities.includes(city) && city === "tokyo") {
    alert(
      `It is currently ${Math.round(weather.tokyo.temp)}°C (${Math.round(
        cToF(weather.tokyo.temp)
      )}°F) in ${
        city.charAt(0).toUpperCase() + city.slice(1)
      } with a humidity of ${weather.tokyo.humidity}%`
    );
  } else if (cities.includes(city) && city === "lisbon") {
    alert(
      `It is currently ${Math.round(weather.lisbon.temp)}°C (${Math.round(
        cToF(weather.lisbon.temp)
      )}°F) in ${
        city.charAt(0).toUpperCase() + city.slice(1)
      } with a humidity of ${weather.lisbon.humidity}%`
    );
  } else if (cities.includes(city) && city === "san francisco") {
    alert(
      `It is currently ${Math.round(
        weather["san francisco"].temp
      )}°C (${Math.round(cToF(weather["san francisco"].temp))}°F) in ${
        city.charAt(0).toUpperCase() + city.slice(1)
      } with a humidity of ${weather["san francisco"].humidity}%`
    );
  } else if (cities.includes(city) && city === "oslo") {
    alert(
      `It is currently ${Math.round(weather.oslo.temp)}°C (${Math.round(
        cToF(weather.oslo.temp)
      )}°F) in ${
        city.charAt(0).toUpperCase() + city.slice(1)
      } with a humidity of ${weather.oslo.humidity}%`
    );
  } else {
    alert(
      "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
    );
  }
}

let city = prompt("Enter a city").toLowerCase().trim();
displayTemperature(weather, city);*/
