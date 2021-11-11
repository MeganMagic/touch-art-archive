export const WESTERN : string = "werstern"
export const KOREAN : string = "korean"

export type Region = {
    regionId : string;
    title : string;
}
export const RegionWestern : Region = {
    regionId : WESTERN,
    title : 'Western',
}
export const RegionKorean : Region = {
    regionId : KOREAN,
    title : "Korean",
}


export type ArtData = {
    artworkId : string;
    title_ko: string;
    artist_ko: string;
    title_en: string;
    artist_en: string;
    year: string;
    material_ko: string;
    material_en: string;
    dimensions: string;
    trend: string;
    school: string;
    imgLink : string;
}
