import React from 'react'
import Formulario from './Formulario'

const Contacto = () => {
  return (
    <div className='contacto'>
      <div className='izquierdaContacto'>
        <h2 className='tituloContacto'>Venta de variadores de velocidad en Gonnet</h2>
        <p className='pContacto'>En Lucidi y Moreno S.A. - Asistente Técnico Autorizado Weg usted podrá encontrar el mejor servicio de venta de variadores de velocidad y reparación de motores eléctricos de todas las marcas.</p>
        <p className='pContacto'>Visítenos, lo atenderemos con la eficiencia que nos caracteriza.</p>
        <p className='pContacto'>¡A lo largo de nuestra trayectoria nuestros clientes nos recomiendan!</p>
        <h2 className='tituloContacto'>Donde encontrarnos:</h2>
        <div>
          <img src="./img/direccion.png" alt="" />
          <h5>Dirección:</h5>
          <p className='pContacto'>Calle 508 n.° 2874, entre 23 y 24 GONNET, LA PLATA, BUENOS AIRES</p>
        </div>
        <div>
          <img src="./img/telefono.png" alt="" />
          <h5>Teléfono:</h5>
          <p className='pContacto'>Teléfono:(0221) 471 1512</p>          
        </div>
        <div>
          <img src="./img/email.png" alt="" />
          <h5>E-MAIL:</h5>
          <p className='pContacto'>clientes@lucidiymorenosa.com / lucidiymoreno@hotmail.com.ar</p>           
        </div>
        <div>
          <img src="./img/reloj.png" alt="" />
          <h5>Horario de atención:</h5>
          <p className='pContacto'>Lunes a viernes de 08:00 a 12:30 hs y de 14:00 a 17:30 hs.</p>           
        </div>
      </div>
      <div className='derechaContacto'>
        <h2 className='tituloFormulario'>Formulario de contacto</h2>
        <Formulario />
      </div>
    </div>
  )
}

export default Contacto