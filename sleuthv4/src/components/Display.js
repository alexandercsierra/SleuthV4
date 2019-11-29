import React from 'react';

function Display (props) {
    const {displayState} = props;

    if (displayState === "Reset"){
        // window.location.reload();
        return (
            <div className="display">
                <h1>Are you sure you want to reset?</h1>
                <button onClick = {e => window.location.reload()}>Yes</button>
                <button>No</button>
            </div>
        )
    }
    return (
        <div className="display">
            <p>{displayState}</p>
        </div>
    );
}

export default Display;