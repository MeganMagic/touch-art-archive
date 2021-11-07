import React, { useState } from "react";
import { RegionData } from '../variables';

import Logo from '../components/Logo';
import Figure from "../components/Figure";
import MoveTopButton from "../components/MoveTopButton";
import BackButton from "../components/BackButton";

type ArchiveProps = {
    content : RegionData;
}

const Archive : React.FC<ArchiveProps> = ({ content }) => {
    const archiveData = content.data
    const tags : Array<string> = archiveData.map((x) => x.trend)
    const tagsSet : Array<string> = tags.filter((x, i) => tags.findIndex(tag => tag === x) === i)

    const [ tagIndex, setTagIndex ] = useState<number>(-1)

    const handleTag = (newTag : number) => {
        if( tagIndex !== newTag) {
            setTagIndex(newTag)
        }
    }


    const element : JSX.Element = (
      <div className="Archive container">
        <Logo />
        <MoveTopButton />
        <BackButton />
  
        <div className="Archive__container">
            <div className="title font-global text-center">
                Archive : {content.title} Art History
            </div>
  
            <ul className="tags">
                <li className={`tag ${tagIndex === -1 ? 'selected' : ''}`} onClick={() => handleTag(-1)}>
                    전체
                </li>  
                {
                    tagsSet.map((tag, index) => 
                        <li 
                            className={`tag ${tagIndex === index ? 'selected' : ''}`} 
                            key={index} id={`tag-${tag}`}
                            onClick={() => handleTag(index)}
                        >
                            {tag}
                        </li>
                    )
                }
                
            </ul>

            <div className="columns">
            {archiveData
                .filter((data) => tagIndex === -1 || data.trend === tagsSet[tagIndex])
                .map((data, i) => (
                <Figure
                    key={i}
                    id={data.artworkId}
                    title={data.title_en}
                    artist={data.artist_en}
                    img={data.imgLink}
                />
                ))}
            </div>
        </div>
    </div>
    );
  
    return element;
}

export default Archive;