import React from "react";
import {buttonLabels} from "./Data";
let btnVal;
function Buttons(props){
    const {setDisplayState} = props;
    const arr = buttonLabels;
    const btns = arr.map(label => {
        return (
            <button key = {label} className={label} onClick = {(e) => {
                e.preventDefault();
                btnVal = label;
                console.log(btnVal);
                return setDisplayState(btnVal);
            }}>{label}</button>
        )
    });
    return btns;
}

export default Buttons;
// export {buttonVal};