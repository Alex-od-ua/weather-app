import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/';
const APIKey = 'adc22cb86b5155101885c27cb80b8205';

export const fetchWeather = async city => {
  const response = await axios.get(
    `${BASE_URL}data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  );
  return response;
};
