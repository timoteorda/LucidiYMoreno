import React from 'react'
import Formulario from './Formulario'

const Balanceo = () => {
  return (
    <div className='contenedorServicios'>
        <div className='izquierdaServicios'>
            <h1 className='tituloServicios'>Balanceo dinámico</h1>
            <p className='parrafoServicios'>Balanceo dinámico es el nombre que recibe el arte de compensar y redistribuir masa, por el efecto producido por la descompensación de las masas por errores generados en la fabricación o el maquinado en máquinas rotativas.</p>
            <p className='parrafoServicios'>El balanceo dinámico ayuda a reducir las vibraciones y ruidos causados por desbalances de masas presentes en el rotor, evitando daños futuros en los rodamientos, las tapas y el sistema acoplado al motor que probablemente generen perdidas de producción. Además, mejora la eficiencia total del motor.
            </p>
            <p className='parrafoServicios'>¡Realice su consulta sobre el balanceo dinámico en Lucidi y Moreno SA! Lo atenderemos en la brevedad.</p>
        </div>
        <div className='derechaServicios'>
            <h1 className='tituloServicios'>Formulario de contacto</h1>
            <Formulario/>
        </div>
    </div>
  )
}

export default Balanceo