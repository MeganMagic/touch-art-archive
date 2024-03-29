import WesternData from './western.json'
import KoreanData from './korean.json'

import { WESTERN, KOREAN } from '../variables'


export function getData(regionId) {
    if(regionId === WESTERN) return WesternData;
    if(regionId === KOREAN) return KoreanData;
    else return []
}

export function getArtworkData(artworkId) {
    // error 처리 하기
    return [...WesternData, ...KoreanData].find( 
        artwork => artwork.artworkId === artworkId 
    );
}