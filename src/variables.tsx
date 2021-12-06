export const WESTERN : string = "werstern"
export const KOREAN : string = "korean"

export type Region = {
    regionId : string;
    title_en : string;
    title_ko : string;
}
export const RegionWestern : Region = {
    regionId : WESTERN,
    title_en : 'Western',
    title_ko : '서양'
}
export const RegionKorean : Region = {
    regionId : KOREAN,
    title_en : "Korean",
    title_ko : "한국"
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
    fileLink : string;
    sketchfabLink : string;
}
