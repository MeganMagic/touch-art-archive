import React from "react";
import { useParams } from "react-router-dom";

import BackButton from "../components/BackButton";

import { getArtworkData } from "../data/useData";
const embedLink = "https://sketchfab.com/models/73479cba1d554be4bf478dea62cdb63c/embed"

const Artwork = () => {

    let params = useParams();
    const artworkId = params.artworkId;
    const data = getArtworkData(artworkId);
    console.log(data);

    const element : JSX.Element = 
    <>
        <BackButton />

        <div className="Artwork__container">

            <Sketchfab embedLink={data ? data.sketchfabLink : ""} />

            <div className="flex flex-ai-c flex-jc-sb">
                <div className="detail">
                    <DetailRow item="Title" value={data?.title_ko} />
                    <DetailRow item="Artist" value={data?.artist_ko} />
                    <DetailRow item="Year" value={data?.year} />
                    <DetailRow item="Material" value={data?.material_ko} />
                    <DetailRow item="Dimensions" value={data?.dimensions} />
                    <DetailRow item="School" value={data?.school} />
                </div>

                <a href={data?.fileLink} download>
                    <button className="button__download">Download</button>
                </a>
            </div>
        </div>
    </>
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


type DetailRowProps = {
    item : string | undefined ;
    value : string | undefined;
}

const DetailRow: React.FC<DetailRowProps> = ({ item, value}) => {
    return (
        <div className="detail__row flex" >
            <div className="item">{item}</div>
            <div className="value">{value}</div>
        </div>
    )
}

const download = (
<div>
    <a href="https://touch-archive.s3.ap-northeast-2.amazonaws.com/w1.stl" download>download</a>
</div>
);