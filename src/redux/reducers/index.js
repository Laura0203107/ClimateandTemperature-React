
import { combineReducers } from 'redux';
import { LOAD_CITY } from '../actions/types';

const mainState = {
    cities:[],
    city:{
        coord:{
            lon:'',
            lat:''
        },
        weather: [
            {            
              main: "",
              description: "",              
            }
          ],
          main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
            sea_level: 0,
            grnd_level: 0
          },
    },
}

function citiesReducers (state = mainState, action){
    const {payload} =action;
  switch(action.type) {
    case LOAD_CITY:
      return {...state,city:payload}
    
    default:
      return state;
  } 
}
  export default combineReducers({
      citiesReducer: citiesReducers,
  });