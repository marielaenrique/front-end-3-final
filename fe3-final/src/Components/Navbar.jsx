import React from 'react';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ContextGlobal} from './utils/global.context.jsx';

const Navbar = () => {
  
  const {themeState, themeDispatch} = useContext(ContextGlobal);
  
  return (
    <nav>
      <button  className={themeState ? "nav-button-dark" : "nav-button"}>
        <Link to="/home" className={themeState ? "a-dark" : undefined}>Home</Link>
      </button>
      <button className={themeState ? "nav-button-dark" : "nav-button"}>
        <Link to="/contact" className={themeState ? "a-dark" : undefined}>Contact</Link>
      </button>
      <button className={themeState ? "nav-button-dark" : "nav-button"}>
        <Link to="/favs" className={themeState ? "a-dark" : undefined}>Favourites</Link>
      </button>
      <button onClick={() => themeDispatch({type: "toggle_theme"})}
      className={themeState ? "nav-button-dark a-dark" : "nav-button"}>
        {!themeState ? "☾ Change theme ☾" : "☀ Change theme ☀"}
      </button>
    </nav>
  )
}

export default Navbar;