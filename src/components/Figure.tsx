import React from "react";
import { Link } from "react-router-dom";
import { ArtData } from "../variables";

type FigureProps = {
    data : ArtData
}

const Figure : React.FC<FigureProps> = ({ data }) => {
  const element = (
      <div className="figure">
        <Link to={`/artwork/${data.artworkId}`}>

            <img src={data.imgLink} alt={data.title_en} />
            <div className="caption">{data.title_en}</div>
            <div className="caption figure-artist">{data.artist_en}</div>
            
        </Link>
      </div>
  );

  return element;
};

export default Figure;
