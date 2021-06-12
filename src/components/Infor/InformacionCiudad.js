import React from 'react'
import { connect } from 'react-redux'
import Emoji from './emoji';
import '../../css/styles.css';


const _InformacionCiudad = ({ city }) => {
    console.log("🚀 ~ file: InformacionCiudad.js ~ line 7 ~ city", city)
    const convertir = k => (k-273.15).toFixed(2)
    
    return city && Object.keys(city).length > 5 ? (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center border p-3" >
            <div class="container-table">
                <ul class="responsive-table">
                    <li class="table-header">
                        <h2 className='table text-white'>{city.name}</h2>
                        <br />
                        <p className='text-white'>{city.weather[0].description}</p>

                    </li>
                    <li class="table-row">

                        <div className="col">Temperatura Actual</div>
                        <div className="col d-flex">{convertir(city.main.temp)}°c {'\t'}
                            {convertir(city.main.temp) > 20 && (<Emoji>🔥</Emoji>)}
                            {convertir(city.main.temp) < 13.5 && (<Emoji>🧊</Emoji>)}
                         </div>
                        

                    </li>
                    <li class="table-row">
                        <div className="col d-flex">Temperatura Minima </div>
                        <div className="col d-flex">{convertir(city.main.temp_min)}<Emoji>❄️</Emoji></div>
                    </li>
                    <li class="table-row">
                        <div className="col d-flex">Temperatura Maxima</div>
                        <div className="col d-flex">{convertir(city.main.temp_max)} <Emoji>🌡️</Emoji></div>
                    </li>
                    <li class="table-row">
                        <div className="col d-flex">Humedad</div>
                        <div className="col d-flex">{city.main.humidity}% <Emoji>💧</Emoji></div>
                    </li>
                    <li class="table-row">
                        <div className="col d-flex">Presion</div>
                        <div className="col d-flex">{city.main.pressure} <Emoji>🌬️</Emoji> </div>
                    </li>
                </ul>
            </div>
        </div>
    ) : (
        <h1 className="font-weight-light text-center">Selecciona Tu ciudad para conocer mas informacion.</h1>
    )
}
const mapStateToProps = (state) => {
    console.log("🚀 ~ file: InformacionCiudad.js ~ line 52 ~ mapStateToProps ~ state", state)
    const { citiesReducer } = state
    return {
        city: citiesReducer.city
    }
}
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(_InformacionCiudad)

