export const defaultWidthtoHeightRatio = 2;

interface CalculateRatioInput {
    widthToHeightRatio?: number;
    src?: string;
}
export const calculateRatio = ({ widthToHeightRatio, src }: CalculateRatioInput) => {
    const ratio =
        widthToHeightRatio ||
        (src && src.split("#")[1] && parseFloat(src.split("#")[1])) ||
        defaultWidthtoHeightRatio;
    return ratio;
};
