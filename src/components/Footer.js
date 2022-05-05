import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
      <div className='footer'>
          <div className='divFooterUno'>
          <div>
            <h5 className='tituloFooter'>PRODUCTOS</h5>
            <ul className='ulFooter'>
              <li className='liFooter'><Link className='linkFooter' to='/motoresElectricos'>Motores eléctricos</Link></li>
              <li className='liFooter'><Link className='linkFooter' to='/arranquesSuaves'>Arranques suaves</Link></li>
              <li className='liFooter'><Link className='linkFooter' to='/controlYproteccion'>Control y proteccion</Link></li>
              <li className='liFooter'><Link className='linkFooter' to='/variadorDeFrecuencias'>Variador de frecuencias</Link></li>
              <li className='liFooter'><Link className='linkFooter' to='/electrobombas'>Electrobombas</Link></li>
            </ul>
          </div>
          <div>
            <h5 className='tituloFooter'>SERVICIOS</h5>
            <ul className='ulFooter'>
              <li className='liFooter'><Link className='linkFooter' to='/reparacion'>Reparación de motores eléctricos</Link></li>
              <li className='liFooter'><Link className='linkFooter' to='/mantenimiento'>Mantenimiento de motores eléctricos</Link></li>
              <li className='liFooter'><Link className='linkFooter' to='/balanceo'>Balanceo dinámico</Link></li>
            </ul>
          </div>
          <div>
            <h5 className='tituloFooter'>HORARIOS</h5>
            <ul className='ulFooter'>
                <li className='liFooter'>Lunes a Viernes</li>
                <li className='liFooter'>08:30 a 12:30</li>
                <li className='liFooter'>14:00 a 17:30</li>
            </ul>
          </div>
          </div>
          <div className='divFooterDos'>
            <h5 className='tituloFooter'>LA EMPRESA</h5>
            <p className='textoFooter'>Somos Lucidi y Moreno S.A. - Asistente Técnico Autorizado Weg, una reconocida empresa en la localidad de Gonnet que se dedica a la venta de motores eléctricos. ¡Contáctenos ahora mismo! Estaremos encantados de atenderlo como usted se lo merece.</p>
          </div>
      </div>
      <div className='subFooter'>
        <h3 className='madeBy'>Site made by: TimoteoRuiz</h3>
      </div>
    </footer>
    </>
  )
}

export default Footer
