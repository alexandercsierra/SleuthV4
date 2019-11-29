import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import GuestInput from "./components/GuestInput"

//initialize array of guests with some value, because otherwise there are errors
let guestArr = ["asd;lk2o390e"];


function App() {

  let [displayState, setDisplayState] = useState("Welcome to Sleuth");

  //guest list state
  let [glState, setGlState] = useState();


  //guest list initializes with above value and also undefined for some reason. Leaves room for 7 guest names. After seven will no longer push any new data to guest array
  if (guestArr.length < 9){
    guestArr.push(glState); 
  }
  
  
  return (
    <div className="App">
      <Display displayState = {displayState} setDisplayState = {setDisplayState} glState={glState} guestArr = {guestArr}/>
      <GuestInput setGlState={setGlState}/>
      <Buttons setDisplayState = {setDisplayState}/>
    </div>
  ); 
}

export default App;
 