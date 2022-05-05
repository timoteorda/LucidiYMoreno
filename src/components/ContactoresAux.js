import React from 'react'

const ContactoresAux = () => {
  return (
    <div className='contenedorProductos'>
        <h1 className='tituloProducto'>Contactores de potencia</h1>
        <div className='divProductos'>
                <div className='producto'>
                    <h2 className='tituloDentroDiv'>CWCA0 - Contactores auxiliares compactos</h2>
                    <img className='imagenProducto' src="./img/producto28.jpg" alt= "Producto 28" />
                    <h3 className='tituloListaProductos'>Principales caracteristicas:</h3>
                    <ul>
                        <li>Fijación por tornillos o directamente en riel DIN 35 mm.</li>
                        <li>Protegido contra cuerpos extraños y toques.</li>
                        <li>Alta confiabilidad de los contactos (17 V - 5 mA).</li>
                        <li>Minicontactor CWCA0 con bobinas en corriente continua de bajo consumo, permitiendo la conexión directa a CLPs.</li>
                        <li>Mismo dimensional (bobina CA o CC) para los modelos CWCA0.</li>
                        <li>Los minicontactores CWCA0 cumplen los requisitos de la IEC 60947-5-1 sobre contactos mecánicamente conectados.</li>
                    </ul>
                </div>
                <div className='producto'>
                    <h2 className='tituloDentroDiv'>CAW04 - Mini contactores auxiliares</h2>
                    <img className='imagenProducto' src="./img/producto29.jpg" alt= "Producto 29" />
                    <p className='parrafoProducto'>Este contactor presenta dimensiones reducidas, siendo la mejor alternativa donde el espacio es esencial.</p>
                    <ul>
                        <li>Corriente: hasta 6 A.</li>
                        <li>Régimen: AC-14/15.</li>
                        <li>Bobinas: CA/CC.</li>
                        <li>Tensión de empleo: Vca 12V a 400V.</li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default ContactoresAux