import React from 'react';
import HomePage from './homepage';
import './Index.css';

//defines first and last name
function App() {
  const fname = 'Cynthia';
  const lname ='Chavez';
  return (
    <HomePage firstName={fname} lastName={lname}/>
    
  )
    
}

export default App;
