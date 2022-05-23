/******************************
 * Repsonsive
 ******************************/
type AtLeastOne<T> = {
    [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];

export const screens = ["mobile", "tablet", "desktop", "wide"] as const;
export type Screen = typeof screens[number];
export type ScreenValues<P> = Record<Screen, P>;
export type ResponsiveValue<P> = P | AtLeastOne<ScreenValues<P>>;

/******************************
 * Media Queries
 ******************************/
export type ScreenMediaQueryMap = { [key in Screen]: string };
export const screenMediaQueryMap: ScreenMediaQueryMap = {
    wide: "(min-width: 1920px)",
    desktop: "(min-width: 1024px) and (max-width: 1920px)",
    tablet: "(min-width: 768px) and (max-width: 1024px)",
    mobile: "(max-width: 768px)",
};

/*
 * Gets the values from read only arrays
 */
type ReadOnlyArrayValues<T> = T extends readonly any[] ? T[number] : void;

/*
 * Gets keys from the Object
 */
type ObjectKeys<T> = T extends { [key: string]: any } ? keyof T : void;

/*
 * Converts properties of an object in properties with Responsive value
 */
export type Responsive<T> = {
    [P in keyof T]: ResponsiveValue<ReadOnlyArrayValues<T[P]> | ObjectKeys<T[P]>>;
};
