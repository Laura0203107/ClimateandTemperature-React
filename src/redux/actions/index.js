import axios from 'axios';
import { LOAD_CITY, ERROR } from './types';

const id = `8b4a1cfe7b37f251dcce8b232975fd6d`;
const servidor = `https://api.openweathermap.org/data/2.5/weather?appid=${id}`;

const headers = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const cargarCiudad = (nombreCiudad = '') => async dispatch => {
    try {
        const ciudadFormateada = nombreCiudad.replace(" ", "%20")
        const servidorConCiudad = `${servidor}&q=${ciudadFormateada}`
        const res = await axios.get(servidorConCiudad, headers);
        dispatch({
            type: LOAD_CITY,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ERROR
        });
    }
}