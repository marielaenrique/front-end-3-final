import React from 'react';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {ContextGlobal} from './utils/global.context.jsx';

const NotFound = () => {
  
  const {themeState} = useContext(ContextGlobal);
  
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(-1);
  }
  
  return (
    <div className='background'>      
      <p className='notFound'>Page not found</p>
      <button onClick={handleClick} className={themeState ? "nav-button-dark a-dark" : "nav-button"}>Go back</button>
    </div>
  )
}

export default NotFound;