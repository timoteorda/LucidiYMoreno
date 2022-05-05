import React from 'react'
import { Link } from 'react-router-dom'

const NuestrosProductosMain = () => {
  return (
    <>
        <h2 className='tituloMain' >Nuestros productos</h2>
        <div className='flexProductos'>
            <div className='contenedorMain'>
                <Link className='tituloProductoMain' to='/motoresElectricos'><h4 className='tituloFlexMain'>Motores eléctricos</h4></Link>
                <Link to='/motoresElectricos'><img className='imagenesMain' src="../img/bomba.png" alt="Bomba" /></Link>
                <p className='textoProductoMain'>Máquina capaz de convertir la energía eléctrica en mecánica mediante campos magnéticos.</p>
            </div>
            <div className='contenedorMain'>
                <Link  className='tituloProductoMain' to='/variadorFrecuencia'><h4 className='tituloFlexMain'>Variadores de frecuencia</h4></Link>
                <Link to='/variadorFrecuencia'><img className='imagenesMain' src="../img/variadorfrecuencia.jpeg" alt="Variador de frecuencia" /></Link>
                <p className='textoProductoMain'>Ideal para aplicación en máquinas o equipos que necesitan control preciso y facilidad de operación.</p>
            </div>
            <div className='contenedorMain'>
                <Link className='tituloProductoMain' to='/controlYproteccion'><h4 className='tituloFlexMain'>Control y protección</h4></Link>
                <Link to='/controlYproteccion'><img className='imagenesMain' src="../img/control.jpg" alt="Control y protección" /></Link>
                <p className='textoProductoMain'>Proyectados con tecnología de última generación para atender una amplia gama de aplicaciones.</p>
            </div>
            <div className='contenedorMain'>
                <Link className='tituloProductoMain' to='/arranquesSuaves'><h4 className='tituloFlexMain'>Arranques Suaves</h4></Link>
                <Link to='/arranquesSuaves'><img className='imagenesMain' src="../img/suave.jpg" alt="Arranques suaves" /></Link>
                <p className='textoProductoMain'>Dispositivos desarrollados para acelerar, desacelerar y proteger los motores de inducción trifásicos.</p>
            </div>
            <div className='contenedorMain'>
                <Link className='tituloProductoMain' to='/electrobombas'><h4 className='tituloFlexMain'>Electrobombas</h4></Link>
                <Link to='/electrobombas'><img className='imagenesMain' src="../img/electrobomba.jpg" alt="Electrobombas" /></Link>
                <p className='textoProductoMain'>Bombas hidráulicas que se caracterizan por ser accionadas a través de un motor eléctrico.</p>
            </div>
        </div>
    </>

  )
}

export default NuestrosProductosMain