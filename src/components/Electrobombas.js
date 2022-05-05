import React from 'react'
import { Link } from 'react-router-dom'

const Electrobombas = () => {
  return (
    <div>
        <div className='containerElectro'>
            <div className='divElectro'>
                <h4 className='tituloElectrobomba'>Electrobomba presurizadora</h4>
                <img className='imagenElectrobombas' src="./img/producto11.jpg" alt="Producto 11" />
            </div>
            <div className='divElectro'>
                <h4 className='tituloElectrobomba'>Electrobomba circuladora para calefacción</h4>
                <img className='imagenElectrobombas' src="./img/producto12.jpg" alt="Producto 12" />
            </div>
            <div className='divElectro'>
                <h4 className='tituloElectrobomba'>Electrobomba periférica</h4>
                <img className='imagenElectrobombas' src="./img/producto13.jpg" alt="Producto 13" />
            </div>
            <div className='divElectro'>
                <h4 className='tituloElectrobomba'>Electrobomba centrífuga</h4>
                <img className='imagenElectrobombas' src="./img/producto14.jpg" alt="Producto 14" />   
            </div>
            <div className='divElectro'>
                <h4 className='tituloElectrobomba'>Electrobomba centrífuga de alto caudal</h4>
                <img className='imagenElectrobombas' src="./img/producto15.jpg" alt="Producto 15" />
            </div>
            <div className='divElectro'>
                <h4 className='tituloElectrobomba'>Electrobomba centrífuga de alta presión</h4>
                <img className='imagenElectrobombas' src="./img/producto16.jpg" alt="Producto 16" />
            </div>
            <div className='divElectro'>
                <h4 className='tituloElectrobomba'>Electrobomba centrífuga vertical</h4>
                <img className='imagenElectrobombas' src="./img/producto17.jpg" alt="Producto 17" />
            </div>
            <div className='divElectro'>
                <h4 className='tituloElectrobomba'>Desagote doméstico</h4>
                <img className='imagenElectrobombas' src="./img/producto18.jpg" alt="Producto 18" />
            </div>
            <div className='divElectro'>
                <h4 className='tituloElectrobomba'>Electrobomba centrífuga de acero inoxidable</h4>
                <img className='imagenElectrobombas' src="./img/producto19.jpg" alt="Producto 19" />   
            </div>
            <div className='divElectro'>
                <h4 className='tituloElectrobomba'>Sumergible para pozo profundo</h4>
                <img className='imagenElectrobombas' src="./img/producto20.jpg" alt="Producto 20" />
            </div>
            <div className='divElectro'>
                <h4 className='tituloElectrobomba'>Desagote con triturador</h4>
                <img className='imagenElectrobombas' src="./img/producto21.jpg" alt="Producto 21" />
            </div>            
        </div>
        <h3 className='contactanosElectro'>Contactanos para mas información</h3>
        <Link to='/contacto'><button className='botonElectro'>Ir a contacto</button></Link>
    </div>
  )
}

export default Electrobombas