import React from 'react'

const Guardamotores = () => {
  return (
    <div className='contenedorProductos'>
        <h1 className='tituloProducto'>Guardamotores</h1>
        <div className='divProductos'>
                <div className='producto'>
                    <h2 className='tituloDentroDiv'>Guardamotores MPW</h2>
                    <img className='imagenProducto' src="./img/producto33.jpg" alt= "Producto 33" />
                    <p className='parrafoProducto'>Protección del Circuito Eléctrico + Maniobra y Protección del Motor. El guardamotor MPW es una solución compacta para la protección del circuito eléctrico y arranque/protección de motores hasta 60 hp (380V) / 75 hp(440V). Posee elevada capacidad de interrupción, permitiendo su empleo incluso instalaciones con elevado nivel de corrientes de cortocircuito.</p>
                    <p className='parrafoProducto'>Asegura total protección al circuito eléctrico y al motor a través de su disparador térmico (ajustable para protección contra sobrecargas y tiene un mecanismo diferencial con sensibilidad contra falla de fases) y magnético (pre ajustado en 13 x In para protección contra cortocircuitos).</p>
                    <p className='parrafoProducto'>Posee versiones con accionamiento a través de botones (MPW16) o por accionamiento rotativo (MPW25/65/100) y indicación de disparo (Trip), permitiendo al operador la visualización del estado del guardamotor. Los guardamotores pueden ser bloqueados con candados o similar en la posición "desconectado", garantizando la seguridad en mantenimientos.</p>
                </div>
        </div>
    </div>
  )
}

export default Guardamotores