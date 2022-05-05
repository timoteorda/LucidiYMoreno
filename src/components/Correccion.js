import React from 'react'

const Correccion = () => {
  return (
    <div className='contenedorProductos'>
    <h1 className='tituloProducto'>Correccion del factor de potencia</h1>
    <div className='divProductos'>
        <div className='producto'>
            <h2 className='tituloDentroDiv'>UCW - Condensadores monofásicos (kvar)</h2>
            <img className='imagenProducto' src="./img/producto35.jpg" alt= "Producto 35" />
            <h3 className='tituloListaProductos'>Principales caracteristicas:</h3>
            <ul>
                <li className='listaProducto'>Bobinas producidas con filme de polipropileno metalizado, autorregenerativo y dieléctrico seco.</li>
                <li className='listaProducto'>Resistencias de descarga incorporadas en las unidades trifásicas, módulos y bancos.</li>
                <li className='listaProducto'>Perdidas dieléctricas menores que 0,2 W/kVAr.</li>
                <li className='listaProducto'>Fabricados de acuerdo con las normas IEC 60831-1/2 y UL 810.</li>
                <li className='listaProducto'>Dispositivo de protección contra explosión.</li>
                <li className='listaProducto'>Libres de PCB.</li>
                <li className='listaProducto'>Potencias de 0,62 a 6,67kVAr en las tensiones de 208 a 240V y de 0,62 a 10kVAr en las tensiones de 380 a 480V.</li>
                <li className='listaProducto'>Células capacitivas para montaje de módulos y bancos trifásicos.</li>
                <li className='listaProducto'>La puesta a tierra es garantizada por el tornillo de fijación de la célula capacitiva con la placa de montaje.</li>
                <li className='listaProducto'>Substitución de células expandidas en los módulos y bancos.</li>
            </ul>
        </div>
        <div className='producto'>
            <h2 className='tituloDentroDiv'>UCWT - Condensadores trifásicas (kvar)</h2>
            <img className='imagenProducto' src="./img/producto36.jpg" alt= "Producto 36" />
            <h3 className='tituloListaProductos'>Principales caracteristicas:</h3>
            <ul>
                <li className='listaProducto'>Film de polipropileno metalizado autorregenerativo con dieléctrico seco.</li>
                <li className='listaProducto'>Dispositivo interruptor de seguridad contra sobrepresión interna.</li>
                <li className='listaProducto'>Máxima corriente de falla permitida de 10.000 A.</li>
                <li className='listaProducto'>Pérdidas dieléctricas menores a 0,4 W/kvar.</li>
                <li className='listaProducto'>Resistencias de descarga incorporadas en las unidades trifásicas, módulos y bancos.</li>
                <li className='listaProducto'>Especificación técnica conforme las normas NBr IEC 60831-1/2 y UL810.</li>
            </ul>
        </div>
    </div>   
    </div>
  )
}

export default Correccion
