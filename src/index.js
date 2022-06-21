import React from 'react'
import {createRoot} from 'react-dom/client'
import { NewsContextProvider } from './NewContext'
import { Routers } from './Routers';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(

         <NewsContextProvider>
           <Routers/>
        </NewsContextProvider>
    
);

