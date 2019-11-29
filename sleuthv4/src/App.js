import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons";



function App() {
  let [displayState, setDisplayState] = useState("Welcome to Sleuth");
  return (
    <div className="App">
      <Display displayState = {displayState}/>
      <Buttons setDisplayState = {setDisplayState}/>
    </div>
  );
}

export default App;
