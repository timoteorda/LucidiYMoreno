import React from 'react'

const Nosotros = () => {
  return (
    <div className='contenedorNosotros'>
        <div className='izquierdaNosotros'>
            <div>
                <h2 className='tituloNosotros'>Conocé más acerca de nosotros</h2>
                <h4 className='subtituloNosotros'>Que hacemos</h4>
                <p className='pNosotros'>En Lucidi y Moreno S.A. - Asistente Técnico Autorizado Weg estamos especializados en:</p> 
                <ul>
                    <li className='pNosotros'>Venta de motores eléctricos.</li>
                    <li className='pNosotros'>Venta de variadores de velocidad.</li>
                    <li className='pNosotros'>Venta de variadores de velocidad.Reparación de motores eléctricos de todas las marcas.</li>
                </ul>
                <p className='pNosotros'>En nuestra empresa nos caracterizamos por brindar un buen servicio, atención personalizada y un trato amable y cordial a los clientes. Además, contamos con personal capacitado dispuesto a asesorarlo y atender cada una de sus necesidades. Consúltenos, nos distinguimos por la seriedad y la eficacia con que trabajamos.</p>
                <p className='pNosotros'>¡Lo esperamos!</p>
            </div>
            <div className='contenedorExperiencia'>
                <img className='iconoExperiencia' src="./img/experiencia.png" alt="Icono" />
                <h3 className='tituloExperiencia'>Apueste por nuestra experiencia. Estamos en:</h3>
                <h3 className='tituloGonnet'>Gonnet</h3>
            </div>
        </div>
        <div className='derechaNosotros'>
            <img className='imagenNosotros' src="./img/quehacemosuno.jpg" alt="Imagen" />
            <img className='imagenNosotros' src="./img/quehacemosdos.jpg" alt="Imagen" />
        </div>
    </div>
  )
}

export default Nosotros