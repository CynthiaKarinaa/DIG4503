//imports the react and homepage
import React from 'react';
import HomePage from './homepage'

//Data to be returned on homepage
function App() {
  const fname = 'Cynthia';
  const lname ='Chavez';
  return (
    <HomePage firstName={fname} lastName={lname}/>
  )
    
}
//exports single function
export default App;
