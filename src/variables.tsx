import WESTERNDATA from "./data/western.json";
import KOREANNDATA from "./data/western.json";

export type RegionData = {
    regionId : string;
    title : string;
    data : Array<ArtData>;
}

export type ArtData = {
    artworkId : string;
    title_ko: string;
    artist_ko: string;
    title_en: string;
    artist_en: string;
    year: string;
    material: string;
    dimensions: string;
    trend: string;
    school: string;
    imgLink : string;
}

export const WesternData : RegionData = {
    regionId : 'WESTERN',
    title : 'Western',
    data : WESTERNDATA
}

export const KoreanData : RegionData = {
    regionId : "KOREAN",
    title : "Korean",
    data : KOREANNDATA
}
