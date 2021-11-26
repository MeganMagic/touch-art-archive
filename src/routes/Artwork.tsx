import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { LanguageState, LANG_KO } from '../language'

import BackButton from "../components/BackButton";

import { getArtworkData } from "../data/useData";
const embedLink = "https://sketchfab.com/models/73479cba1d554be4bf478dea62cdb63c/embed"

const Artwork = () => {

    let params = useParams();
    const artworkId = params.artworkId;
    const data = getArtworkData(artworkId);

    const element : JSX.Element = 
    <>
        <div className="Artwork__container">

            <Sketchfab embedLink={data ? data.sketchfabLink : ""} />

            <div className="flex flex-ai-c flex-jc-sb">
                <div className="detail">
                    <DetailRow 
                        item={{en: "Title", ko: '제목'}} 
                        value={{en : data?.title_en, ko : data?.title_ko}}
                    />
                    <DetailRow 
                        item={{en: "Artist", ko: '작가'}} 
                        value={{en : data?.artist_en, ko : data?.artist_ko}}
                    />
                    <DetailRow 
                        item={{en : "Year", ko: "제작년도" }}
                        value={{en : data?.year, ko : data?.year}}
                    />
                    <DetailRow 
                        item={{en : "Material",  ko : "재료" }}
                        value={{en : data?.material_en, ko : data?.material_ko}}
                    />
                    <DetailRow 
                        item={{en : "Dimensions", ko : "크기" }}
                        value={{en : data?.dimensions, ko : data?.dimensions}}
                    />
                    <DetailRow 
                        item={{en : "School", ko : "사조"}}
                        value={{en : data?.school, ko : data?.school}}
                    />
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
    item : {
        en : string,
        ko : string
    };
    value : {
        en : string | undefined,
        ko : string | undefined
    };
}

const DetailRow: React.FC<DetailRowProps> = ({ item, value }) => {
    const language = useSelector((state: LanguageState) => state.language);

    return (
        <div className="detail__row flex" >
            <div className="item">
                {
                    language === LANG_KO ?
                    item.ko : item.en
                }
            </div>
            <div className="value">
                {
                    language === LANG_KO ?
                    value.ko : value.en
                }
            </div>
        </div>
    )
}

const download = (
<div>
    <a href="https://touch-archive.s3.ap-northeast-2.amazonaws.com/w1.stl" download>download</a>
</div>
);