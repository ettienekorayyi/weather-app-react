import axios from 'axios';

export const apiKey = {
    accessKey: 'acc9d7a1bb44c63eb0003bc8ae3c3e19'
};

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json'
    }
});