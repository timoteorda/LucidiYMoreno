import React from 'react'
import Formulario from './Formulario'

const Mantenimiento = () => {
  return (
    <div className='contenedorServicios'>
        <div className='izquierdaServicios'>
            <h1 className='tituloServicios'>Mantenimiento de motores eléctricos</h1>
            <p className='parrafoServicios'>La finalidad del mantenimiento es prolongar lo máximo posible la vida útil del equipo. La no observancia de uno de los ítems relacionados a seguir puede llevar a paradas no deseadas del equipo.</p>
            <ul class="listaMantenimiento">
                  <li>Inspección visual del motor y del acoplamiento observando los niveles de ruido, de la vibración, alineamiento, señales de desgastes, oxidación y piezas deterioradas.</li>
                  <li>Medición de resistencia de aislamiento.</li>
                  <li>Liberación de contaminantes en la carcaza para facilitar el intercambio de calor con el medio ambiente.</li>
                  <li>Verificación del ventilador y de la entrada de aire.</li>
                  <li>Verificación del estado de los sellos y su respectivo cambio si fuera necesario.</li>
                  <li>Inspección de los rodamientos, reposición de grasa o realización del cambio de estos si fuera necesario.</li>
                  <li>Inspección del estado del bobinado para proceder con el secado, el barnizado y/o la limpieza según lo requiera. </li>
                  <li>Pintado completo de las piezas.</li>
                  <li>Pruebas y ensayos.</li>
                  <li>Cambios constructivos del motor si fuera requerido por el cliente.</li>
            </ul>
            <p className='parrafoServicios'>Al realizar el mantenimiento en nuestro taller, nuestro personal se encarga de ejecutar todas estas tareas antes nombradas, con el objetivo de aumentar la vida útil total del motor y de la aplicación. Además, se registran todas las tareas y modificaciones realizadas al motor, generando un historial para ofrecer una solución a cualquier problema que se pueda llegar a presentar.
            </p>
            <p className='parrafoServicios'>¡Realice su consulta sobre el mantenimiento de su motor eléctrico en Lucidi y Moreno SA! Lo atenderemos en la brevedad.</p>
        </div>
        <div className='derechaServicios'>
            <h1 className='tituloServicios'>Formulario de contacto</h1>
            <Formulario/>
        </div>
    </div>
  )
}

export default Mantenimiento