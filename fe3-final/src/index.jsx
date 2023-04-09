import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import NotFound from './Components/NotFound';
import {ContextGlobalProvider} from './Components/utils/global.context.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextGlobalProvider>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/dentist/:id' element={<Detail/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </ContextGlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);