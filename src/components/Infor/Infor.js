import React from 'react'
import { connect } from 'react-redux';
import { cargarCiudad } from '../../redux/actions';
import  InformacionCiudad  from './InformacionCiudad';

export const ciudades = [
    'Bogota',
    'Cali',
    'Tunja',
    'Ibague',
    'Girardot',
    'Bucaramanga',
    'Barranquilla',
    'Espinal',
    'Medellin',
    'Santander',
    'Cartagena',
    'Pereira',
    'Santa Marta',
    'Monteria',
    'Neiva',
    'Palmira',
    'Yopal',
    'Leticia'
    
]

function _Infor({ cargarCiudad }) {
    function seleccionarCiudad(evento) {
        const ciudad = evento.target.value;
        cargarCiudad(ciudad);
    }
    return (
        <div>
            <div className="col-12 border">
            <h1 className="font-weight-light text-center">Conoce la informacion de la temperatura en tu ciduad</h1>
                <div className="d-flex justify-content-center w-100 my-4">
                    <select onChange={(e) => seleccionarCiudad(e)} className="w-50 p-2 border-primary" aria-label="Default select example">
                        <option selected>Selecciona tu ciudad</option>
                        {ciudades.map((ciudad, indice) => (
                            <option key={indice} value={ciudad}>{ciudad}</option>
                        ))}
                    </select>
                </div>
            </div>
            <InformacionCiudad/>
        </div>
    )
}
export default connect(null, { cargarCiudad })(_Infor)