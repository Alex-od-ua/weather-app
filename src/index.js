import { fetchWeather } from './weather-fetch';

const refs = {
  container: document.querySelector('.container'),
  search: document.querySelector('.search-box button'),
  weatherBox: document.querySelector('.weather-box'),
  weatherDetails: document.querySelector('.weather-details'),
  error404: document.querySelector('.not-found'),
  input: document.querySelector('.search-box_input'),

  image: document.querySelector('.weather-img'),
  temperature: document.querySelector('.temperature'),
  description: document.querySelector('.description'),
  humidity: document.querySelector('.humidity-span'),
  wind: document.querySelector('.wind-span'),
};

refs.search.addEventListener('click', mainFunc);

async function mainFunc() {
  const city = refs.input.value;

  if (city === '') return;

  try {
    response = await fetchWeather(city);
    weather(response);
  } catch (error) {
    console.log(error);
    err(error.response.data.cod);
  }
}

const err = error => {
  console.log(error);
  if (error === '404') {
    refs.container.style.height = '450px';
    refs.weatherBox.style.display = 'none';
    refs.weatherDetails.style.display = 'none';
    refs.error404.style.display = 'block';
    refs.error404.classList.add('fadeIn');
    return;
  }
};

const weather = response => {
  refs.error404.style.display = 'none';
  refs.error404.classList.remove('fadeIn');

  // switch (response.data.weather[0].main) {
  //   case 'Clear':
  //     image.src = '../images/clear.png';
  //     break;

  //   case 'Rain':
  //     image.src = '../images/rain.png';
  //     break;

  //   case 'Snow':
  //     image.src = '../images/snow.png';
  //     break;

  //   case 'Clouds':
  //     image.src = [imageCloud];
  //     break;

  //   case 'Haze':
  //     image.src = '../images/mist.png';
  //     break;

  //   default:
  //     image.src = '';
  // }

  refs.temperature.innerHTML = `${response.data.main.temp}<span>°C</span>`;
  refs.description.innerHTML = `${response.data.weather[0].description}`;
  refs.humidity.innerHTML = `${response.data.main.humidity}%`;
  refs.wind.innerHTML = `${response.data.wind.speed}Km/h`;

  refs.weatherBox.style.display = '';
  refs.weatherDetails.style.display = '';
  refs.weatherBox.classList.add('fadeIn');
  refs.weatherDetails.classList.add('fadeIn');
  refs.container.style.height = '590px';
};
