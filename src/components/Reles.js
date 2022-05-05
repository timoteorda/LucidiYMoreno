import React from 'react'

const Reles = () => {
  return (
    <div className='contenedorProductos'>
        <h1 className='tituloProducto'>Relés de sobrecarga</h1>
        <div className='divProductos'>
                <div className='producto'>
                    <h2 className='tituloDentroDiv'>Relés de Sobrecarga Electrónicos RW_E</h2>
                    <img className='imagenProducto' src="./img/producto30.jpg" alt= "Producto 30" />
                    <p className='parrafoProducto'>Los RW_E fueron diseñados para la protección de motores eléctricos de baja tensión en corriente alternas sinusoidales de 50/60 Hz donde la fiabilidad, baja disipación de potencia y facilidad de gestión de mantenimiento son imprescindibles.</p>
                    <h3 className='tituloListaProductos'>Principales caracteristicas:</h3>
                    <ul>
                        <li>Protecciones incorporadas: sobrecarga, falta de fase y desbalance de fases
                        Disponible en la versión tripolar.</li>
                        <li>Clases de disparo ajustables: 10, 20 y 30.</li>
                        <li>Acoplamiento directo a la línea de contactores CWB y CWM sin precisar accesorios.</li>
                        <li>Accesorio que posibilita la fijación en riel DIN 35mm (EN 50022) o a través de tornillos.</li>
                        <li>Disponible en la versión tripolar.</li>
                    </ul>
                    <h3 className='tituloListaProductos'>Protecciones incorporadas:</h3>
                    <ul>
                        <li>Sobrecarga</li>
                        <li>Falta de fase</li>
                        <li>Desbalance de fases</li>
                    </ul>
                </div>
                <div className='producto'>
                    <h2 className='tituloDentroDiv'>Relés de Sobrecarga Térmico RW</h2>
                    <img className='imagenProducto' src="./img/producto31.jpg" alt= "Producto 31" />
                    <p className='parrafoProducto'>Los relés de sobrecarga RW protegen las cargas contra el calentamiento indebido, causado por sobrecargas o por falta de fase. Cuando tenemos una sobrecarga o una falta de fase en el circuito, ocurre un aumento en la corriente del motor. Esta elevación de corriente causa el accionamiento del mecanismo de disparo que actuará sobre los contactos auxiliares 95-96 (NF) y 97-98 (NA).</p>
                    <p className='parrafoProducto'>Los contactos auxiliares apagan la carga por medio de un contactor. El tiempo para el apagado está relacionado con la corriente de sobrecarga y con la corriente ajustada en el relé, que se encuentra debidamente representada en la curva de disparo del relé. Luego del desarme, se debe aguardar el reestablecimiento del sistema, para que se ejecute el rearme, que puede ser hecho de forma manual o automática.</p>
                </div>
                <div className='producto'>
                    <h2 className='tituloDentroDiv'>Relé Inteligente SRW01</h2>
                    <img className='imagenProducto' src="./img/producto32.jpg" alt= "Producto 32" />
                    <p className='parrafoProducto'>El relé SRW01 es un sistema que gerencia motores eléctricos de baja tensión que cuenta con alta tecnología y capacidad de comunicación en rede. Siendo modular, las funcionalidades del relé pueden ser extendidas, convirtiéndose en un producto versátil preparado para diversas aplicaciones.</p>
                    <p className='parrafoProducto'>El SRW01 posee un design modular que permite la expansión de funcionalidad del relé. El SRW01 posee además una puerta USB que facilita la parametrización, el monitoreo y la programación del relé a través de un PC usando el software WLP. Para poseer una memoria térmica, el relé es capaz de mantener la relación térmica del motor mismo cuando sin energía.</p>
                    <h3 className='tituloListaProductos'>Principales caracteristicas:</h3>
                    <ul>
                        <li>Tamaño reducido, estructura compacta.</li>
                        <li>Unidad de Control (UC) rango de tensión de alimentación: 110-240 V CA/ CC o 24 V CA/ CC.</li>
                        <li>Unidad de Control (UC) con 4 entradas digitales y 4 salidas digitales.</li>
                        <li>Montaje en Riel DIN o por tornillos</li>
                        <li>Programación vía software libre WLP o IHM (opcional).</li>
                        <li>Fácil cambio del modulo de comunicación, con sistema de gaveta</li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Reles