import React from 'react';

function GuestInput(props){
    const {setGlState} = props;
    return(
        <form>
            <input type="text"placeholder="Enter guest name"></input>
            <button onClick = {(e) => {
                e.preventDefault();
                let guest = document.querySelector("input");
                setGlState(guest.value);
                console.log(guest.value);
                guest.value = "";

            }}>OK</button>
        </form>
    )
}

export default GuestInput;