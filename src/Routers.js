import {BrowserRouter, Routes, Route, NavLink, Link} from 'react-router-dom'
import { Navbar } from './Componentes/navbar/Navbar'
import { News } from './Componentes/news/News'
import { AppLogin } from './Login/AppLogin'
import { AppRegistro } from './Login/AppRegistro'
import { Business } from './pages/business/Business'
import { Entertainment } from './pages/entertainment/Entertainment'
import { General } from './pages/general/General'
import { Health } from './pages/health/Health'
import { Science } from './pages/science/Science'
import { Sports } from './pages/sports/Sports'
import { Technology } from './pages/technology/Technology';

export const Routers = () => {
    return (
        <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element ={ <News/> }/>
                <Route path='login' element = {<AppLogin/>}/>
                <Route path='registro' element = {<AppRegistro/>}/>
                <Route path='/sports' element={<Sports/>}/>
                <Route path='/technology' element={<Technology/>}/>
                <Route path='/science' element={<Science/>}/>
                <Route path='/health' element={<Health/>}/>
                <Route path='/general' element={<General/>}/>
                <Route path='/entertainment' element={<Entertainment/>}/>
                <Route path='/business' element={<Business/>}/>
                <Route path='*' element={<div>No found Page</div>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

