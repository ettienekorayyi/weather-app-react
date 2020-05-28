import { initialState } from './initialState';
import { GET_WEATHER_DATA } from '../commons/types';

export const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_WEATHER_DATA:
            return action.payload;
        default:
            return state;
    }
};
