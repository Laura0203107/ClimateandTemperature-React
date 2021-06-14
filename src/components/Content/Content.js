import React from 'react'

export default function Content() {
    return (
        <article className="grid-layout__content">
        <section className="container">
            <div className="page-title">
                <h1>Welcome to <b>Climate And Temperature</b></h1>
                <div className="divider"></div>
                <p>Laura Camila Fernandez Ospina 67000117</p>
                <p>Nicolas Galvez Cardenas 67000127</p>
            </div>
            <div className='row'>
                <div className='column'>
                    <div className='blue-column'>
                        <h2>
                           ¿Quienes somos?
                        </h2>
                        <p>El nombre de la empresa Climate and Temperature, Es un programa que
                            pretende ofrecer toda la información que pueda ser de interés en temas
                            climatológicos de las ciudades de Colombia.
                        </p>
                        <p>
                            La plataforma de Climate and Temperature permite exponer y dar seguimiento a los
                            principales eventos sobre cambio climático en la región y el mundo; el desarrollo de iniciativas
                            y herramientas periodísticas; y la generación, difusión e intercambio de información
                            sobre cambio climático en América Latina y el Caribe.
                        </p>
                        <h2>
                           Antecedentes
                        </h2>
                        <p> La Comisión de Sistemas Básicos (CSB)  de la Organización Meteorológica Mundial (OMM) en su Duodécima Sesión en Ginebra, del 27 de Noviembre al 8 de Diciembe de 2000, 
                             debatió sobre la necesidad de reforzar el reconocimiento de los servicios meteorológicos para el público que los SMHN proporcionan a través de la creación de un proyecto piloto. 
                             La Comisión acordó que sería designado un Centro de Recogida para recopilar las predicciones meteorológicas suministradas por los SMHN participantes. El  Centro de Recogida generaría 
                             un producto integrado con las predicciones de las mayores ciudades del mundo y lo pondría a disposición para su uso por todos los miembros de la OMM para su difusión al público y a los medios de comunicación.
                         </p>
                         
                    </div>
                </div>
                <div className='column'>
                    <div className='green-column'>
                        <h2>Objetivo</h2>
                        <p>
                            El nombre de la empresa Climate and Temperature, Es un programa con el fin de 
                            ofrecer toda la información que pueda ser de interés sobre temas
                            climatológicos de las ciudades de Colombia.
                        </p>

                        <h3>Cambios Climaticos</h3>
                        <p>
                            Los cambios climáticos han existido desde el inicio de la historia de la Tierra, 
                            han sido graduales o abruptos y se han debido a causas diversas, como las relacionadas 
                            con los cambios en los parámetros orbitales, variaciones de la radiación solar, la deriva 
                            continental, periodos de vulcanismo intenso, procesos bióticos o impactos de meteoritos. 
                            El cambio climático actual es antropogénico y se relaciona principalmente con la intensificación 
                            del efecto invernadero debido a las emisiones industriales procedentes de la quema de combustibles fósiles.
                        </p>
                        <h3>¿Qué importancia para la evolución humana?</h3>
                        <p>
                            El clima es dinámico; va cambiando a lo largo de la historia de la tierra. El clima ha cambiado mucho durante 
                            el periodo de tiempo de la evolución humana. A medida que se enfría el clima, las personas aprenden a cazar ya 
                            que las plantas se vuelven escasas en invierno. Para una mejor caza se requieren mejores herramientas. Mejores 
                            herramientas incentivaron la evolución de la cultura.
                        </p>
                       
                    </div>
                </div>
            </div>
        </section>
    </article>
    )
}