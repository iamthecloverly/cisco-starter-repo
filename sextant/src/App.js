import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'react-banner/dist/style.css'
import Exhibit from './components/Exhibit/Exhibit';
import PublicIP1 from './components/PublicIP/PublicIP1';
import PublicIP2 from './components/PublicIP/PublicIP2.js';

function App() {
  const data1=<PublicIP1/>
  const data2=<PublicIP2/>
  return(
    < div className='App'>
      <Navbar/>
      <Exhibit
      title= 'Public IPV4' 
      body='This is your IPV4 address'
      ip={data1}   
/>

<Exhibit
      title= 'Public IPV6' 
      body='This is your IPV6 address'
      ip={data2}
/>
    
    </div>    
  )
}

export default App;
