import React from 'react'

const MotoresElectricos = () => {
  return (
    <div className='contenedorProductos'>
        <h1 className='tituloProducto'>Motores eléctricos</h1>
    <div className='divProductos'>
        <div className='producto'>
            <h2 className='tituloDentroDiv'>Motores eléctrico W12</h2>
            <img className='imagenProducto' src="./img/producto1.jpg" alt= "Producto 1" />
            <p className='parrafoProducto'>La línea W12 ha sido desarrollada para ofrecer versatilidad y eficiencia. Con bridas, pies, cajas y tapas de cajas de conexión en polímero industrial de alta resistencia y carcasa de aluminio sin mecanizado, el motor tiene el peso más bajo para aplicaciones robustas, lo que le confiere aún más posibilidades.</p>
        </div>
        <div className='producto'>
            <h2 className='tituloDentroDiv'>Motores eléctrico W21</h2>
            <img className='imagenProducto' src="./img/producto2.jpg" alt= "Producto 2" />
            <p className='parrafoProducto'>Los motores de aluminio WEG W21 son el resultado de un alto diseño tecnológico, componentes de primera calidad y una amplia experiencia en aplicaciones. Reconocido por su calidad, fiabilidad y eficiencia. estos motores se utilizan en todo el mundo en una variedad de aplicaciones industriales.</p>
        </div>
        <div className='producto'>
            <h2 className='tituloDentroDiv'>Motores eléctrico W21Xdb</h2>
            <img className='imagenProducto' src="./img/producto3.jpg" alt= "Producto 3" />
            <p className='parrafoProducto'>El W21Xdb es un motor a prueba de explosión proyectado especialmente para operar en ambientes con presencia de atmósferas explosivas. Presenta construcción robusta, sistema de retención de llamas con intersticios entre piezas cuidadosamente proyectados, mecanizado de precisión en la caja de conexión y tornillos con alta resistencia mecánica. Garantiza seguridad en áreas clasificadas como Zona 1 y Zona 2.</p>
        </div>
        <div className='producto'>
            <h2 className='tituloDentroDiv'>Motores eléctrico W21</h2>
            <img className='imagenProducto' src="./img/producto4.jpg" alt= "Producto 4" />
            <p className='parrafoProducto'>Alto rendimiento con máxima eficiencia de energía, esto es el significado del nuevo motor eléctrico WEG. Alto rendimiento y bajo costo de propiedad durante toda la vida útil del motor, han sido la base para el desarrollo del W22. Un diseño creado para anticipar conceptos en rendimiento y ahorro de energía.</p>
            <h3 className='tituloListaProductos'>Otras caracteristicas:</h3>
            <ul>
                <li className='listaProducto'>Bajo costo operacional total</li>
                <li className='listaProducto'>Versatilidad</li>
                <li className='listaProducto'>Aplicaciones con convertidores</li>
                <li className='listaProducto'>Durabilidad</li>
                <li className='listaProducto'>Extensiones de la línea para el futuro</li>
            </ul>
        </div>
    </div>   
    </div>
  )
}

export default MotoresElectricos