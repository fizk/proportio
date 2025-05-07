import { type ScaleFormulaType } from "./scaleFormulas";

export default function calculateScale(baseSize: number, scale: number, increment: number, scaleMethod: ScaleFormulaType | any) {
    baseSize = Number(baseSize);
    scale = Number(scale);

    if (scaleMethod === 'power') return baseSize * Math.pow(scale, increment);
    else if (scaleMethod === 'linear') return baseSize + scale * increment;
    else return scale * baseSize;
}
