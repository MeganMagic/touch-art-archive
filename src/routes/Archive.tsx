import React, { useState } from "react";


import Figure from "../components/Figure";
import MoveTopButton from "../components/MoveTopButton";

import { Region, ArtData } from '../variables';



type ArchiveProps = {
    region : Region;
    artworks : Array<ArtData>;
}

const Archive : React.FC<ArchiveProps> = ({ region, artworks }) => {

    const [ tagIndex, setTagIndex ] = useState<number>(-1)
    const tags : Array<string> = artworks.map((x) => x.trend)
    const tagsSet : Array<string> = tags.filter((x, i) => tags?.findIndex(tag => tag === x) === i)

    
    const element : JSX.Element = (
    <>
        <MoveTopButton />
  
        <div className="Archive__container">

            <div className="title font-global text-center">
                Archive : {region.title} Art History
            </div>
  
            <Tags 
                selectTag={setTagIndex}
                selectedTagIndex={tagIndex}
                tagsSet={tagsSet}
            />

            <div className="columns">
            {
                artworks
                .filter((data) => tagIndex === -1 || data.trend === tagsSet[tagIndex])
                .map((data, i) => <Figure data={data}/>)
            }
            </div>
        </div>
    </>
    );
  
    return element;
}

export default Archive;


type TagsProps = {
    selectTag : Function;
    selectedTagIndex : number;
    tagsSet : Array<string>;
}
const Tags : React.FC<TagsProps> = ({ selectedTagIndex, selectTag, tagsSet}) => {

    const handleTag = (newTagIndex : number) => {
        if( selectedTagIndex !== newTagIndex) {
            selectTag(newTagIndex)
        }
    }

    const element = 
    <ul className="tags">
        <li className={`tag ${selectedTagIndex === -1 ? 'selected' : ''}`} onClick={() => handleTag(-1)}>
            전체
        </li>  
        {
            tagsSet.map((tag, index) => 
                <li 
                    className={`tag ${selectedTagIndex === index ? 'selected' : ''}`} 
                    key={index} id={`tag-${tag}`}
                    onClick={() => handleTag(index)}
                >
                    {tag}
                </li>
            )
        }
        
    </ul>
    ;
    return element
}