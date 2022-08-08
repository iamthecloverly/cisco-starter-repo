import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from 'react-banner'
import 'react-banner/dist/style.css'
import Exhibit from './components/Exhibit/Exhibit';

function App() {
  return(
    < div className='App'>
      <Navbar/>
      <Exhibit/>
    </div>    
  )
}

export default App;
