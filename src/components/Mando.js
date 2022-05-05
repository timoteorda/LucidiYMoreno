import React from 'react'

const Mando = () => {
  return (
    <div className='contenedorProductos'>
    <h1 className='tituloProducto'>Mando y Señalización</h1>
    <div className='divProductos'>
        <div className='producto'>
            <h2 className='tituloDentroDiv'>Pulsadores</h2>
            <img className='imagenProducto' src="./img/producto37.jpg" alt= "Producto 37" />
            <h3 className='tituloListaProductos'>Principales caracteristicas:</h3>
            <ul>
                <li className='listaProducto'>Alta tecnología en proyecto y fabricación.</li>
                <li className='listaProducto'>Diseño moderno y ergonómico.</li>
                <li className='listaProducto'>Contactos y brida con sistema de montaje rápido y fácil.</li>
                <li className='listaProducto'>Bloque de Iluminación con LED integrado de alto brillo.</li>
                <li className='listaProducto'>Elevada vida útil de 100.000 h de operación.</li>
                <li className='listaProducto'>Disponible en las tensiones de 12 V CA/CC, 24 V CA/CC, 48 V CA/CC, 110-130 V CA, 125 V CC y 220-240 V CA.</li>
                <li className='listaProducto'>5 opciones de colores: rojo, verde, amarillo, blanco y azul, indicados en el centralizador del LED para facilitar su identificación..</li>
            </ul>
        </div>
        <div className='producto'>
            <h2 className='tituloDentroDiv'>Selectores</h2>
            <img className='imagenProducto' src="./img/producto38.jpg" alt= "Producto 38" />
            <p className='parrafoProducto'>Desarrollados para utilización en ambientes severos y aplicaciones industriales, los conmutadores de la línea de Comando y Señalización CSW poseen alta tecnología en proyecto y fabricación, diseño moderno y ergonómico.</p>
        </div>
        <div className='producto'>
            <h2 className='tituloDentroDiv'>Lámparas Piloto</h2>
            <img className='imagenProducto' src="./img/producto39.jpg" alt= "Producto 39" />
            <p className='parrafoProducto'>Desarrollados para utilización en ambientes severos y aplicaciones industriales, los señaleros de la línea de Comando y Señalización CSW poseen alta tecnología en proyecto y fabricación, diseño moderno y ergonómico.</p>
        </div>
        <div className='producto'>
            <h2 className='tituloDentroDiv'>Accesorios para Controls</h2>
            <img className='imagenProducto' src="./img/producto40.jpg" alt= "Producto 40" />
            <p className='parrafoProducto'>Entre en contacto con nosotros para más información.</p>
        </div>
    </div>   
    </div>
  )
}

export default Mando