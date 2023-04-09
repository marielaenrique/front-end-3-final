import React from 'react';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ContextGlobal} from '../Components/utils/global.context.jsx';
import Card from '../Components/Card';

const Home = () => {
  
  const {dentists} = useContext(ContextGlobal);
  
  return (
    <div className='background'>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.length ? dentists.map((dentist) => (
          <Link to={`/dentist/${dentist.id}`} key={dentist.id}>
            <Card name={dentist.name} username={dentist.username} id={dentist.id}/>
          </Link>
        )) : null
        }
      </div>
    </div>
  )
}

export default Home;