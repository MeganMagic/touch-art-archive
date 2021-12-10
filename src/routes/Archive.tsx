import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { LanguageState, LANG_KO } from '../language'

import Figure from "../components/Figure";
import MoveTopButton from "../components/MoveTopButton";

import { Region, ArtData } from '../variables';



type ArchiveProps = {
    region : Region;
    artworks : Array<ArtData>;
}

const Archive : React.FC<ArchiveProps> = ({ region, artworks }) => {

    const language = useSelector((state: LanguageState) => state.language);

    const [ tagIndex, setTagIndex ] = useState<number>(-1)
    const tags : Array<string> = 
        language === LANG_KO ? 
        artworks.map((x) => x.trend) : 
        artworks.map((x) => x.school)
    const tagsSet : Array<string> = tags.filter((x, i) => tags?.findIndex(tag => tag === x) === i)

 
    const element : JSX.Element = (
    <>
        <MoveTopButton />
  
        <div className="Archive__container">

            <div className="title font-global text-center">
            {
                language === LANG_KO ?
                `${region.title_ko} 미술사` :
                `Archive : ${region.title_en} Art History`
            }
            </div>
  
            <Tags 
                selectTag={setTagIndex}
                selectedTagIndex={tagIndex}
                tagsSet={tagsSet}
            />

            <div className="columns" >
            {
                artworks
                .filter((data) => tagIndex === -1 || data.trend === tagsSet[tagIndex] || data.school === tagsSet[tagIndex])
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

    const language = useSelector((state: LanguageState) => state.language);

    const handleTag = (newTagIndex : number) => {
        if( selectedTagIndex !== newTagIndex) {
            selectTag(newTagIndex)
        }
    }

    const element = 
    <ul className="tags">
        <li className={`tag ${selectedTagIndex === -1 ? 'selected' : ''}`} onClick={() => handleTag(-1)}>
        { language === LANG_KO ? '전체' : 'All'}
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