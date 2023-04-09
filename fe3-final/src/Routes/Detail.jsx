import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {ContextGlobal} from '../Components/utils/global.context.jsx';

const Detail = () => {
  
  const {themeState} = useContext(ContextGlobal);
  
  const [dentist, setDentist] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  
  const getDentist = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();
    setDentist(data);
  }
  
  useEffect(() => {
    getDentist();
  }, [params])
  
  const handleClick = () => {
    navigate(-1);
  }
  
  return (
    <div className='background'>
      <h1>Detail Dentist ID {params.id}</h1>
      <div className='detail'>
        <img className='img-detail' src="../images/doctor.jpg" alt="profile-pic"/>
        <p>Name: {dentist.name}</p>
        <p>Email: {dentist.email}</p>
        <p>Phone number: {dentist.phone}</p>
        <p>Website: {dentist.website}</p>
      </div>
      <button onClick={handleClick} className={themeState ? "nav-button-dark a-dark" : "nav-button"}>Go back</button>
    </div>
  )
}

export default Detail;