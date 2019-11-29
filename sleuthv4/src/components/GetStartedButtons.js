import React from "react";

function gsButtons(props){
    //instead of setting the display state, onclick hide buttons and reset textcontent
    
    let message = document.querySelector(".display .filter h1");
    // const {setDisplayState} = props;
    return(
    <div className="gsbtns">
        <button onClick = {e => {
            e.preventDefault();
            let gsBtns = document.querySelector(".gsbtns");
            gsBtns.classList.add("hide");
            return (
                <h1>FARTS;</h1>
            );

            
        }}>Get Started</button>
        <button onClick = {e => {
            window.location.reload();
        }}>RESET</button>
    </div>
    );
}

export default gsButtons;