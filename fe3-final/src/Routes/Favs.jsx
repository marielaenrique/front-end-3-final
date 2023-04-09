import React from "react";
import {useEffect, useContext} from 'react';
import Card from "../Components/Card";
import {Link} from 'react-router-dom';
import {ContextGlobal} from '../Components/utils/global.context.jsx';

const Favs = () => {
  
  const {themeState, dispatch} = useContext(ContextGlobal);
  
  const getFavs = () => {
    const localData = localStorage.getItem("favs");
    const data = JSON.parse(localData);
    return data;
  }
  
  const data = getFavs();
  
  useEffect(() => {
    getFavs();
  }, []);
  
  return (
    <div className="background">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {data && data.map((item) => (
          <div key={item.id}>
            <Link to={`/dentista/${item.id}`}>
              <Card name={item.name} username={item.username} id={item.id}/>
            </Link>
            <button
            onClick={() => {dispatch({ type: "remove_fav", payload: item.id })}}
            className={themeState ? "favRemoveButtonDark" : "favRemoveButton"}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;