import React from "react";
import { useParams } from "react-router-dom";

import Logo from "../components/Logo";
import BackButton from "../components/BackButton";

import { getArtworkData } from "../data/useData";
const embedLink = "https://sketchfab.com/models/73479cba1d554be4bf478dea62cdb63c/embed"

const Artwork = () => {

    let params = useParams();
    const artworkId = params.artworkId;
    const data = getArtworkData(artworkId);

    const element : JSX.Element = 
        <div className="Artwork">
            <BackButton />

            <div className="Artwork__container">

            <Sketchfab embedLink={embedLink} />
            </div>

            <div>
                <a href="https://touch-archive.s3.ap-northeast-2.amazonaws.com/w1.stl" download>download</a>
            </div>
        </div>
    return element;
}

export default Artwork



type SketchfabProps = {
    embedLink : string;
};

const Sketchfab : React.FC<SketchfabProps> = ({ embedLink }) => {
    return (
    <div className="sketchfab-embed-wrapper"> 
        <iframe title="122222222" frameBorder="0" allowFullScreen moz-AllowFullScreen="true" webkit-AllowFullScreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share 
            src={embedLink}> 
        </iframe> 
    </div>
    );
}
