import React from 'react';
import TypeElement from '../elements/TypeElement';
import calculateScale from '../utilities/calculateScale';
import round from '../utilities/round';
import '../styles/typography.css';

interface Props {
    sampleText: string
}

interface Props {
    sampleText: string
    baseSize: number
    typeScale: number
    typeSmallQuantity: number
    typeLargeQuantity: number
    typeScaleFormula: string
    baseScaleUnit: string
}

export default function Typography ({
    sampleText,
    baseSize,
    typeScale,
    typeSmallQuantity,
    typeLargeQuantity,
    typeScaleFormula,
    baseScaleUnit,
}: Props) {
    let smallSizeArray = new Array(typeSmallQuantity).fill(0);
    let largeSizeArray = new Array(typeLargeQuantity).fill(0);

    const smallSizes = smallSizeArray.map((e, i) => {
        const increment = (i + 1) * -1;
        const size = Math.round(
            calculateScale(baseSize, typeScale, increment, typeScaleFormula),
        );
        const name = `text-size-${100 + increment * 10}`;
        const value = baseScaleUnit === 'px' ? size : round(size / baseSize, 3);

        return (
            <TypeElement
                key={`${typeScale}-neg${i}`}
                size={size}
                content={sampleText}
                showValue
                baseScaleUnit={baseScaleUnit}
                baseSize={baseSize}
            />
        );
    });
    const orderedSmallSizes = smallSizes.reverse();

    const largeSizes = largeSizeArray.map((e, i) => {
        const size = Math.round(
            calculateScale(baseSize, typeScale, i, typeScaleFormula),
        );
        const name = `text-size-${100 * (i + 1)}`;
        const value = baseScaleUnit === 'px' ? size : round(size / baseSize, 3);

        return (
            <TypeElement
                key={`${typeScale}-${i}`}
                size={size}
                content={sampleText}
                showValue
                baseScaleUnit={baseScaleUnit}
                baseSize={baseSize}
            />
        );
    });

    return (
        <div className="column">
            <h3>Typography</h3>
            <div id="typography">
                {orderedSmallSizes}
                {largeSizes}
            </div>
        </div>
    );
};
