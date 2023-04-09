import {createContext, useState, useEffect, useReducer, useParams} from "react";

export const initialState = {theme: false, favourites: []};

export const ContextGlobal = createContext();



const getFavsFromStorage = () => {
  const localData = localStorage.getItem("favs");
  return localData ? JSON.parse(localData) : [];
}

const saveFavsInStorage = (favs) => {
  localStorage.setItem("favs", JSON.stringify(favs));
};

const reducer = (state, action) => {
  switch(action.type) {
    case "add_fav": {
      const savedDentist = state.favourites.find((dentist) => dentist.id === action.payload.id);
      if(savedDentist) {
        return state;
      }
      const newState = [...state.favourites, action.payload];
      saveFavsInStorage(newState);
      return {...state, favourites: newState}
    }
    case "remove_fav":
      const filteredFavs = state.favourites.filter((fav) => fav.id !== action.payload);
      saveFavsInStorage(filteredFavs);
      return {...state, favourites: filteredFavs};
    default:
      return state;
  }
};



const saveThemeInStorage = (theme) => {
  localStorage.setItem("theme", JSON.stringify(theme));
};

const getThemeFromStorage = () => {
  const localData = localStorage.getItem("theme");
  return localData ? JSON.parse(localData) : initialState.theme;
};

const reducerTheme = (themeState, themeAction) => {
  switch(themeAction.type) {
    case "toggle_theme":
      saveThemeInStorage(!themeState);
      return !themeState;
    default:
      return themeState;
  }
};



export const ContextGlobalProvider = ({children}) => {
  
  const [dentists, setDentists] = useState([]);
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const [themeState, themeDispatch] = useReducer(reducerTheme, getThemeFromStorage());
  
  const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentists(data);
  }
  
  useEffect(() => {
    getDentists();
    getFavsFromStorage();
  }, []);
  
  return (
    <ContextGlobal.Provider value={{dentists, state, dispatch, themeState, themeDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};