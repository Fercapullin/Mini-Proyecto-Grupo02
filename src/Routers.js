

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { News } from './Componentes/News'
import { AppLogin } from './Login/AppLogin'
import { AppRegistro } from './Login/AppRegistro'

export const Routers = () => {
  return (
    <BrowserRouter>
     <Routes>
         <Route path='/' >
         <Route index element ={ <News/> }/>
                <Route path='login' element = {<AppLogin/>}/>
                <Route path='registro' element = {<AppRegistro/>}/>
                <Route path='noticias' element ={ <News/> }/>
         </Route>
     </Routes>
    </BrowserRouter>
  )
}

