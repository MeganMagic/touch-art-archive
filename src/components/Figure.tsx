import React from "react";
import { Link } from "react-router-dom";
import { ArtData } from "../variables";

import { useSelector } from 'react-redux';
import { LanguageState, LANG_KO, LANG_EN } from '../language';

type FigureProps = {
    data : ArtData;
}

const Figure : React.FC<FigureProps> = ({ data }) => {
    const language = useSelector((state : LanguageState) => state.language)

    const element = (
        <div className="figure" >
            <Link to={`/artwork/${data.artworkId}`}>

                <img src={data.imgLink} alt={language == LANG_KO ? data.title_ko : data.title_en} />
                <div className="caption">{language == LANG_KO ? data.title_ko : data.title_en}</div>
                <div className="caption figure-artist">{language == LANG_KO ? data.artist_ko : data.artist_en}</div>
            
            </Link>
        </div>
    );
    return element;
};

export default Figure;
