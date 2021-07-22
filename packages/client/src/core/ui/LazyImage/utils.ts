export const defaultHeightToWidthRatio = 0.5;

interface CalculateRatioInput {
    heightToWidthRatio?: number;
    src?: string;
}
export const calculateRatio = ({ heightToWidthRatio, src }: CalculateRatioInput) => {
    const ratio =
        heightToWidthRatio ||
        (src && src.split("#")[1] && parseInt(src.split("#")[1])) ||
        defaultHeightToWidthRatio;
    return ratio;
};
