import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//added second header with background color and a button
class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h2 style={{backgroundColor: "Gold"}}>I am a student at UCF</h2>
      <p> <button onClick={luck}>Click for Good Luck!</button></p>
      </div>
    );
  }
}
//function for button
function luck() {
  alert("Good Luck!");
}







ReactDOM.render(
  
  <React.StrictMode>
    <App />
    <MyHeader />
  </React.StrictMode>,
  document.getElementById('root')
);

