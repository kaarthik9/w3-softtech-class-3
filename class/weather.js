const weatherForm = document.querySelector("#weather-form");
const weatherInput = document.querySelector("#city-input");

const cityName = document.querySelector("#city-name");
const condition = document.querySelector("#condition");
const temperature = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const feelsLike = document.querySelector("#feels-like");

weatherForm.onsubmit = (e) => {
  e.preventDefault();

  let weatherLocation = weatherInput.value

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "65014af152msh87eda40a94ca1e5p1d1562jsnaa6da74196b4",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${weatherLocation}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      displayWeatherData(response)
    })
    .catch((err) => console.error(err));
};


const displayWeatherData = (data) => {

  cityName.innerHTML = `${data.location.region}, ${data.location.country}`

  condition.innerHTML = `${data.current.condition.text}`
  
  temperature.innerHTML = data.current.temp_c
  humidity.innerHTML = data.current.humidity
  feelsLike.innerHTML = data.current.feelslike_c
}