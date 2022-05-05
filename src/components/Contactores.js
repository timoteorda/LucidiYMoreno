import React from 'react'

const Contactores = () => {
  return (
    <div className='contenedorProductos'>
        <h1 className='tituloProducto'>Contactores de potencia</h1>
        <div className='divProductos'>
                <div className='producto'>
                    <h2 className='tituloDentroDiv'>CWB – Contactores</h2>
                    <img className='imagenProducto' src="./img/producto26.jpg" alt= "Producto 26" />
                    <p className='parrafoProducto'>Por ser compacto, con solamente 45 mm de ancho y disponibles hasta 38 A, y 54 mm de ancho disponibles de 40 A hasta 80 A, los contactores CWB permiten un mejor aprovechamiento del espacio interno de tableros eléctricos, comparados con soluciones tradicionales de contactores de mismas potencias.</p>
                    <p className='parrafoProducto'>La configuración con dos contactos auxiliares incorporados (1NA + 1NC) hace del CWB un contactor flexible y adecuado para aplicación en la mayoría dos sistemas de automatización, contribuyendo para la reducción del espacio en tableros eléctricos.</p>
                </div>
                <div className='producto'>
                    <h2 className='tituloDentroDiv'>CWC - Contactores compactos</h2>
                    <img className='imagenProducto' src="./img/producto27.jpg" alt= "Producto 27" />
                    <p className='parrafoProducto'>Hasta 60% más pequeño, con relación al modelo correspondiente de la línea CWB.</p>
                    <h3 className='tituloListaProductos'>Otras caracteristicas:</h3>
                    <ul>
                        <li>Maniobra en régimen AC-3 hasta 22 A.</li>
                        <li>Minicontactores CA y CC con mismo tamaño para series hasta 16 A, simplificando proyectos de tableros.</li>
                        <li>Tensión de aislamiento de 690 V.</li>
                        <li>Permite operación en régimen AC-4.</li>
                        <li>La tecnología de los minicontactores con comando en corriente continua de bajo consumo permite la utilización de menores fuentes de alimentación.</li>
                        <li>Enganche rápido en el riel.</li>
                        <li>Completa línea de accesorios, permitiendo montajes rápidos y compactos, para las más diversas aplicaciones.</li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Contactores