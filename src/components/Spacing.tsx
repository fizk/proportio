import React from 'react';
import SpacingElement from '../elements/SpacingElement';
import calculateScale from '../utilities/calculateScale';
import round from '../utilities/round';
import '../styles/spacing.css';

interface Props {
    baseSize: number
    spacingScaleFactor: number
    spacingSmallQuantity: number
    spacingLargeQuantity: number
    spacingFormula: string
    baseScaleUnit: string
}

export default function Spacing({
    baseSize,
    baseScaleUnit,
    spacingScaleFactor,
    spacingSmallQuantity,
    spacingLargeQuantity,
    spacingFormula,
}: Props) {

    let smallSizeArray = new Array(spacingSmallQuantity).fill(0);
    let largeSizeArray = new Array(spacingLargeQuantity).fill(0);

    smallSizeArray = smallSizeArray.map((e, i) => {
        let increment = (i + 1) * -1;
        const size = Math.round(
            calculateScale(baseSize, spacingScaleFactor, increment, spacingFormula),
        );
        const name = `spacing-${100 + increment * 10}`;
        const value = baseScaleUnit === 'px' ? size : round(size / baseSize, 3);

        return size;
    });
    smallSizeArray = smallSizeArray.reverse();
    largeSizeArray = largeSizeArray.map((e, i) => {
        const size = Math.round(
            calculateScale(baseSize, spacingScaleFactor, i, spacingFormula),
        );
        const name = `spacing-${100 * (i + 1)}`;
        const value = baseScaleUnit === 'px' ? size : round(size / baseSize, 3);

        const object = {
            [name]: {
                value: `${value}${baseScaleUnit}`,
                type: 'dimension',
            },
        };
        return calculateScale(baseSize, spacingScaleFactor, i, spacingFormula);
    });

    const spacingSizes = smallSizeArray.concat(largeSizeArray);

    const spacingElements = spacingSizes.map((size, i) => {
        return (
            <SpacingElement
                key={`spacing-${size}-${i}`}
                size={size}
                baseSize={baseSize}
                baseScaleUnit={baseScaleUnit}
            />
        );
    });

    return (
        <div className="column">
            <h3>Spacing</h3>
            <div id="spacingWrapper">{spacingElements}</div>
        </div>
    );
};
