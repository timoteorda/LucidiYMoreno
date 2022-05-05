import React from 'react'

const PresentacionMain = () => {
  return (
    <>
        <div className='contenedorPresentacion'>
            <div className='izquierdaPresentacion'>   
                <h3 className='tituloPresentacion'>Presentacion</h3>
                <p className='parrafoPresentacion'>Somos Lucidi y Moreno S.A. - Asistente Técnico Autorizado Weg, una reconocida empresa en la localidad de Gonnet que se dedica a la venta y reparación de motores eléctricos.</p>
                <p className='parrafoPresentacion'>¡Contáctenos ahora mismo! Estaremos encantados de atenderlo como usted se lo merece.</p>
                
            </div>
            <div className='derechaPresentacion'>
                <h3 className='tituloPresentacion'>Donde Estamos</h3>
                <ul className='ulPresentacion'>
                    <li className='liPresentacion'>Direccion: Calle 508 n°2874, entre 23 y 24</li>
                    <li className='liPresentacion'>GONNET, LA PLATA, ARGENTINA</li>
                    <li className='liPresentacion'>Mail: lucidiymoreno@hotmail.com.ar</li>
                    <li className='liPresentacion'>Teléfono: (0221) 471 1512</li>
                </ul>
            </div>
            
        </div>
    </>
  )
}

export default PresentacionMain