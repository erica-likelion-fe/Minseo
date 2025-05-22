
import React from 'react';
import { Header } from './Header';
import { Nav } from './Nav';
import { Main } from './Main';
import { Card } from './Card';

import './Home.css';

function Home() {
  return ( 
    
    
    <div className="Home"> 
      <Header className='Header' />
      <Nav className='Nav' />
      
      <Main className='Main'>
          <Card />
      </Main>
      
    </div>
      
    )
  }

export default Home;