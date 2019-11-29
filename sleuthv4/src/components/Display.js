import React from 'react';
import GsButtons from './GetStartedButtons';

function Display (props) {
    const {displayState, setDisplayState, glState, guestArr} = props;
    let guestStr = "";
    let form = document.querySelector("form");
    //if reset button is pressed
    if (displayState === "Reset"){
        return (
            //ask if sure
            <div className="display">
                <h1>Are you sure you want to reset?</h1>
                {/*on click reload the window to reset*/}
                <button className = "Yes" onClick = {e => window.location.reload()}>Yes</button>
                <button>No</button>
            </div>
        )
    } else if (guestArr.length === 9){
        let guestList = guestArr.slice(2);


        //creates string of guests comma separated
        for (let i=0; i<guestList.length; i++){
            if (guestList[i + 1] !== undefined){
                guestStr += guestList[i] + ", ";
            } else if (guestList[i+1] === undefined){
                guestStr += "and " + guestList[i];
            }
        }

        form.classList.add("hide");
            return(
            <div className="display">
                <div className="filter">
                    <h1>The final guest list is: </h1>
                    <p>{guestStr}</p>
                    <GsButtons setDisplayState = {setDisplayState}/>
                </div>
            </div>);
    } else if (guestArr.length === 2){
        return(
            <div className="display">
                <div className="filter"><p>{displayState}</p> </div>
               
            </div>
        )
    } else if (guestArr.length < 9 && guestArr.length > 2){
        return (
            <div className="display">
                <div className="filter">
                    <p>{displayState}</p>
                    <p>Newest guest is {glState}</p>
                </div>
            </div>);
    } 
}

export default Display;