import React from 'react'

const Arrancadores = () => {
  return (
    <div className='contenedorProductos'>
        <h1 className='tituloProducto'>Arrancadores en caja</h1>
        <div className='divProductos'>
                <div className='producto'>
                    <h2 className='tituloDentroDiv'>Arrancadores DLW y DLWM</h2>
                    <img className='imagenProducto' src="./img/producto34.jpg" alt= "Producto 34" />
                    <p className='parrafoProducto'>Destinados a hacer la maniobra y protección de motores eléctricos trifásicos y monofásicos. La WEG tiene disponible un arrancador especialmente proyectado y dimensionado de acuerdo con la aplicación.</p>
                    <h3 className='tituloListaProductos'>Principales Características:</h3>
                    <ul>
                        <li>Arrancadores en caja termoplástica y metálica.</li>
                        <li>Amplio rango de potencias.</li>
                        <li>Disponibilidad de diversos tipos de accionamientos (Conecta+Desconecta; Remoto; Reset, Selector Man-Off-Auto).</li>
                        <li>Versiones para aplicaciones específicas (Motobombas/Condominio).</li>
                        <li>Dimensiones reducidas y Design moderno.</li>
                        <li>Instalación y mantenimiento fácil e rápido.</li>
                        <li>Proyectada y fabricada de acuerdo con especificaciones técnicas IEC/EN 60947.</li>
                    </ul>
                    <h3 className='tituloListaProductos'>Arrancador en caja termoplástica</h3>
                    <ul>
                        <li>Arrancador Directo Trifásico - DLW.</li>
                        <li>Arrancador Directo Monofásico - DLWM.</li>
                        <li>Arrancador Estrella - Triángulo - ETW.</li>
                        <li>Arrancador Directo Trifásico para Bombeo - PDWB.</li>
                        <li>Arrancador Directo Monofásico para Bombeo - PDWMB.</li>
                        <li>Arrancador Directo Trifásico con Fusible - PDWF.</li>
                        <li>Arrancador Directo Trifásico - Condominio PDWC.</li>
                        <li>Arrancador Directo Trifásico con conmutación automática para 2 motores - Condominio Automática – PDWCA</li>
                    </ul>
                    
                </div>
        </div>
    </div>
  )
}

export default Arrancadores