import React from "react";
import {useContext} from 'react';
import {ContextGlobal} from '../Components/utils/global.context.jsx';

const Card = ({ name, username, id }) => {
  
  const {dispatch, themeState} = useContext(ContextGlobal);
  
  function addFav() {
    dispatch({
      type: "add_fav",
      payload: {
        name, username, id
      },
    });
    alert(`El dentista ${name} ha sido agregado a favoritos`);
  }
  
  return (
    <div className={themeState ? "card-dark" : "card"}>
      <img src="./images/doctor.jpg" alt="profile-pic"/>
      <h4>{name}</h4>
      <p>{username}</p>
      <button onClick={addFav} className={themeState ? "favButtonDark" : "favButton"}>⭐</button>
    </div>
  );
};

export default Card;