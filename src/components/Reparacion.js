import React from 'react'
import Formulario from './Formulario'
const Reparacion = () => {
  return (
    <div className='contenedorServicios'>
        <div className='izquierdaServicios'>
            <h1 className='tituloServicios'>Reparación de motores eléctricos</h1>
            <p className='parrafoServicios'>En Lucidi y Moreno SA nos dedicamos a la reparación de motores eléctricos. En primer lugar, una vez llegado el motor a nuestro taller, se realiza una evaluación de este para la detección de posibles fallas. Luego, se desarma el motor para realizar la evaluación interna del bobinado, rodamientos, rotor y chapas del estator. Se procede con la limpieza, extracción de los rodamientos para su reemplazo y el rebobinado del estator.</p>
            <p className='parrafoServicios'>Finalmente, se realiza el armado del motor, las pruebas para verificar su correcto funcionamiento y el pintado completo.
            </p>
            <p className='parrafoServicios'>¡Realice su consulta sobre la reparación de su motor eléctrico en Lucidi y Moreno SA! Lo atenderemos en la brevedad.</p>
        </div>
        <div className='derechaServicios'>
            <h1 className='tituloServicios'>Formulario de contacto</h1>
            <Formulario/>
        </div>
    </div>
  )
}

export default Reparacion