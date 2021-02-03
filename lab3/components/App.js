import React from 'react';
import HomePage from './homepage'


function App() {
  const fname = 'Cynthia';
  const lname ='Chavez';
  return (
    <HomePage firstName={fname} lastName={lname}/>
  )
    
}

export default App;
