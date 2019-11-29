import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import GuestInput from "./components/GuestInput"


let guestArr = ["asd;lk2o390e"];
function App() {
  let [displayState, setDisplayState] = useState("Welcome to Sleuth");
  let [glState, setGlState] = useState();
  if (guestArr.length < 9){
    guestArr.push(glState); 
    console.log(guestArr); 
  }
  
  
  return (
    <div className="App">
      <Display displayState = {displayState} glState={glState} guestArr = {guestArr}/>
      <GuestInput setGlState={setGlState}/>
      <Buttons setDisplayState = {setDisplayState}/>
    </div>
  );
}

export default App;
