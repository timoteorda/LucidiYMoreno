import React from 'react'
import Contacto from './Contacto'
import { Route, Routes } from 'react-router-dom'
import PaginaMain from './PaginaMain'
import Nosotros from './Nosotros'
import Reparacion from './Reparacion'
import Mantenimiento from './Mantenimiento'
import Balanceo from './Balanceo'
import Manuales from './Manuales'
import MotoresElectricos from './MotoresElectricos'
import Arranques from './Arranques'
import Variadores from './Variadores'
import Electrobombas from './Electrobombas'
import Control from './Control'
import Interruptores from './Interruptores'
import Contactores from './Contactores'
import ContactoresAux from './ContactoresAux'
import Reles from './Reles'
import Guardamotores from './Guardamotores'
import Arrancadores from './Arrancadores'
import Correccion from './Correccion'
import Mando from './Mando'

const Main = () => {

    return (
            <main>               
            <Routes>
                <Route path="/" element={<PaginaMain/>} />
                <Route path='/reparacion' element={<Reparacion/>} />
                <Route path='/mantenimiento' element={<Mantenimiento/>} />
                <Route path='/motoresElectricos' element={<MotoresElectricos/>} />
                <Route path='/arranquesSuaves' element={<Arranques/>} />
                <Route path='/variadorDeFrecuencias' element={<Variadores/>} />
                <Route path='/electrobombas' element={<Electrobombas/>} />
                <Route path='/controlYproteccion' element={<Control/>} />
                <Route path='/interruptores' element={<Interruptores/>} />
                <Route path='/contactoresPotencia' element={<Contactores/>} />
                <Route path='/contactoresAuxiliares' element={<ContactoresAux/>} />
                <Route path='/reles' element={<Reles/>} />
                <Route path='/guardamotores' element={<Guardamotores/>} />
                <Route path='/arrancadores' element={<Arrancadores/>} />
                <Route path='/correccion' element={<Correccion/>} />
                <Route path='/mando' element={<Mando/>}/>
                <Route path='/balanceo' element={<Balanceo/>} />
                <Route path='/manuales' element={<Manuales/>} />
                <Route path="/nosotros" element={<Nosotros/>} />
                <Route path="/contacto" element={<Contacto/>} />
            </Routes>
            </main>
    )
}

export default Main