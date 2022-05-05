import React from 'react'
import { Link } from 'react-router-dom'

const Control = () => {
  return (
    <div>
        <div className='containerElectro'>
            <div className='divElectro'>
                <Link to="/interruptores"><h4 className='tituloElectrobomba'>Interruptores</h4></Link>
                <Link to="/interruptores"><img className='imagenElectrobombas' src="./img/producto23.jpg" alt="Producto 23" /></Link>
            </div>
            <div className='divElectro'>
                <Link to="/contactoresPotencia"><h4 className='tituloElectrobomba'>Contactores de potencia</h4></Link>
                <Link to="/contactoresPotencia"><img className='imagenElectrobombas' src="./img/producto26.jpg" alt="Producto 26" /></Link>
            </div>
            <div className='divElectro'>
                <Link to="/contactoresAuxiliares"><h4 className='tituloElectrobomba'>Contactores auxiliares</h4></Link>
                <Link to="/contactoresAuxiliares"><img className='imagenElectrobombas' src="./img/producto28.jpg" alt="Producto 28" /></Link>
            </div>
            <div className='divElectro'>
                <Link to="/reles"><h4 className='tituloElectrobomba'>Relés de sobrecarga</h4></Link>
                <Link to="/reles"><img className='imagenElectrobombas' src="./img/producto30.jpg" alt="Producto 30" /></Link>
            </div>
            <div className='divElectro'>
                <Link to="/guardamotores"><h4 className='tituloElectrobomba'>Guardamotores</h4></Link>
                <Link to="/guardamotores"><img className='imagenElectrobombas' src="./img/producto33.jpg" alt="Producto 33" /></Link>
            </div>
            <div className='divElectro'>
                <Link to="/arrancadores"><h4 className='tituloElectrobomba'>Arrancadores en caja</h4></Link>
                <Link to="/arrancadores"><img className='imagenElectrobombas' src="./img/producto34.jpg" alt="Producto 34" /></Link>
            </div>
            <div className='divElectro'>
                <Link to="/correccion"><h4 className='tituloElectrobomba'>Corrección del factor de potencia</h4></Link>
                <Link to="/correccion"><img className='imagenElectrobombas' src="./img/producto35.jpg" alt="Producto 35" /></Link>
            </div>
            <div className='divElectro'>
                <Link to="/mando"><h4 className='tituloElectrobomba'>Mando y señalización</h4></Link>
                <Link to="/mando"><img className='imagenElectrobombas' src="./img/producto37.jpg" alt="Producto 37" /></Link>
            </div>
        </div>
        <h3 className='contactanosElectro'>Contactanos para mas información</h3>
        <Link to='/contacto'><button className='botonElectro'>Ir a contacto</button></Link>
    </div>
  )
}

export default Control