import React from 'react';

function Display (props) {
    const {displayState, glState, guestArr} = props;
    

    if (displayState === "Reset"){
        // window.location.reload();
        return (
            <div className="display">
                <h1>Are you sure you want to reset?</h1>
                <button className = "Yes" onClick = {e => window.location.reload()}>Yes</button>
                <button>No</button>
            </div>
        )
    } else if (guestArr.length === 9){
        let guestList = guestArr.slice(2);
        return (
            <div className="display">
                <h1>The final guest list is: {guestList}</h1>
            </div>
        )
    } else if (guestArr.length === 2){
        return(
            <div className="display">
               <p>{displayState}</p> 
            </div>
        )
    } else if (guestArr.length < 9 && guestArr.length > 2){
        return (
            <div className="display">
                <p>{displayState}</p>
                <p>Newest guest is {glState}</p>
            </div>);
    } 
}

export default Display;