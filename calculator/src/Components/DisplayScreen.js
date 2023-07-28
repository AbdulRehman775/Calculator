import React from "react";

const DisplayScreen = (props) => {

    return(
       <>
                <p className = "text-center text-light fs-1 ps-5">{props.result}</p>

        </>
    );
}

export default DisplayScreen;