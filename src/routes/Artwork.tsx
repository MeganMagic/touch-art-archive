import React, { ReactPropTypes } from "react";

const ArtWork : React.FC<ReactPropTypes> = (props) => {

    console.log(props)

    const element : JSX.Element = 
    <div className="Artwork">
        Artwork
    </div>
    return element;
}

export default ArtWork