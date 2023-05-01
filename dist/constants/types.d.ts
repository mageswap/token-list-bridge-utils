export interface PolygonMappedToken {
    rootToken: string;
    childToken: string;
    isPos?: boolean;
}
export interface BnbMappedToken {
    childToken: string;
    decimals: number;
}
export type GenericMappedTokenData = {
    [key: string]: string | undefined;
};
export type PolygonMappedTokenData = {
    [key: string]: PolygonMappedToken;
};
export type BnbMappedTokenData = {
    [key: string]: BnbMappedToken;
};
