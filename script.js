const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
var pressure = document.querySelector('#pressured');
var maxt=document.querySelector('#max-temp');
var mint=document.querySelector('#max-temp');
const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');
const defaultc= document.querySelector('.default-container');

let city="Mumbai";
async function checkWeather(city){
    const api_key = "44de63004fca450650c974e410958fef";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    defaultc.style.display = "none";
    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        
        return;
    }

    console.log("run");
    
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    pressure.innerHTML=`${weather_data.main.pressure}hPa`;
    maxt.innerHTML=`${Math.round(weather_data.main.temp_max- 273.15)}`;
    mint.innerHTML=`${Math.round(weather_data.main.temp_min- 273.15)}`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/assets/clouds.svg";
            
            
            break;
        case 'Clear':
            weather_img.src = "/assets/clear-day.svg";
            break;
        case 'Rain':
            weather_img.src = "/assets/rain.svg";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.svg";
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.svg";
            break;

        case 'Haze':
                weather_img.src = "/assets/haze-day.svg";
                
                break;

        
        case 'Smoke':
                weather_img.src = "/assets/smoke.svg";
              
                break;
     default:
                    weather_img.src = "/assets/smoke.svg"; 
                    break;

    }
    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});

function toggleExpand() {
    var weatherImage = document.querySelector('.weather-img');
    var weatherDetails = document.querySelector('.weather-details');
    var locationNotFound = document.querySelector('.location-not-found');
    var windSpeed = document.querySelector('#wind-speed');
    var pressure = document.querySelector('.pressure');
    var temperatureDetails = document.querySelector('.temperature-details');
   
  
    if (weatherImage.style.display !== 'none') {
      weatherImage.style.display = 'none';
      

      windSpeed.style.display = 'block';
      pressure.style.display = 'flex';
      temperatureDetails.style.display = 'flex';
      weatherDetails.classList.add('expanded');
    } else {
      weatherImage.style.display = 'block';
      weatherDetails.style.display = 'flex';
      
      pressure.style.display = 'none';
      temperatureDetails.style.display = 'none';
      weatherDetails.classList.remove('expanded');
    }
  }
  