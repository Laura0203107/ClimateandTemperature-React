import React, { useState, useEffect } from 'react';
import '../../css/styles.css';

function conexion1(){
    ("entro a la base de datos");
    alert("<?php $conexion = pg_connect('host=climateandtemperature-server.postgres.database.azure.com dbname=postgres user=Administrador@climateandtemperature-server password=Ng45*L66');")
    var Temperatura = document.getElementById("inputTemperatura").value;
    var Humedad = document.getElementById("inputHumedad").value;
    var Pais = document.getElementById("FormControlPais").value;
    var Ciudad = document.getElementById("FormControlCiudad").value;
    var Codigo = document.getElementById("inputCodigo").value;
    var Nombre = "Bogota";

    alert("<?php pg_query($conexion, 'INSERT INTO public.'Ciudades'(idciudad, codigopostal, nombre, temperatura, humedad) VALUES (?, ",Codigo,", ",Nombre,", ",Temperatura,", ",Humedad,");' ?>");
    
    /*var r = [Temperatura,Humedad, Pais, Ciudad, Codigo];
    return r;*/
}

function Formulario() {    
  return (
        <div className="container page-section">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <h1 className="font-weight-light text-center" style={{color: 'green'}}>Crear un registro de humedad y temperatura de su ciudad</h1>
        <div className="col text-center">
            <a className="btn btn-secondary btn-center" href="#">Crear Nuevo Registro</a>
        </div>
        <div>
            <h1 className="font-weight-light text-center">Humedad y Temperatura de la ciudad</h1>
            
            <hr className="text-center" style={{width: '750px'}}></hr>
            <div className="container" style={{width: '750px'}}>
                <div className="row">
                <div className="col">
                        <label>Codigo Postal</label>
                        <input type="number" className="form-control" id="inputCodigo"></input>
                    </div>
                    <div className="col">
                        <label>Temperatura</label>
                        <input type="number" className="form-control" id="inputTemperatura" placeholder="0°"></input>
                    </div>
                    <div className="col">
                        <label >Humedad</label>
                        <input type="number" className="form-control" id="inputHumedad" placeholder="0%"></input>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col">
                        <select className="form-control" id="FormControlPais">
                            <option>Seleccione Pais</option>
                            <option>Colombia</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-control" id="FormControlCiudad">
                            <option>Nombre</option>
                            <option>Bogota</option>
                            <option>Medellin</option>
                            <option>Bucaramanga</option>
                            <option>Barranquilla</option>
                            <option>Cali</option>
                            <option>Ibague</option>
                            <option>Pasto</option>
                            <option>Neiva</option>
                            <option>Armenia</option>
                            <option>Cartegena</option>
                            <option>Santa Marta</option>
                            <option>Florencia</option>
                            <option>Yopal</option>
                            <option>Cartago</option>
                            <option>Villavicencio</option>
                            <option>Armenia</option>
                        </select>
                    </div>
                </div>
                <hr className="text-center" style={{width: '750px' }}></hr>
                <botton className="btn btn-secondary" onclick="conexion1()">Guardar</botton>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>


    );
}

export default Formulario;