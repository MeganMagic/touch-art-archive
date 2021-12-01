import React, { ReactPropTypes } from "react";


const Slide : React.FC<ReactPropTypes> = ({ children }) => {
    return (
    <div className="Slide">
        {children}
    </div>
    );
}

export default Slide;