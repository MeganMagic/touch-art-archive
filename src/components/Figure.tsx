import React from "react";
import { Link } from "react-router-dom";

type FigureProps = {
    id : string;
    img : string;
    title : string;
    artist : string;
}

const Figure : React.FC<FigureProps> = ({ id, img, title, artist }) => {
  const element = (
    <Link to={`/artwork/${id}`}>
      <figure>
        <img src={img} alt={title} />

        <figcaption>{title}</figcaption>
        <figcaption className="figure-artist">{artist}</figcaption>
      </figure>
    </Link>
  );

  return element;
};

export default Figure;
