import {useContext} from 'react';
import {Outlet} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {ContextGlobal} from './Components/utils/global.context.jsx';

function App() {
  const {themeState} = useContext(ContextGlobal);
  
  return (
    <div className={themeState ? "dark" : undefined}>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;