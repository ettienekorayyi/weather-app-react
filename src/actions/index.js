import openweathermap, { apiKey } from '../api/openweathermap';

export const getWeatherData = (lat, lon) => async dispatch => {
    const response = await openweathermap
        .get(`/weather?lat=${lat}&lon=${lon}&appid=${apiKey.accessKey}&units=metric`);
    
    dispatch({ type: 'GET_WEATHER_DATA', payload: response.data })
};

