import React from 'react';
import calculateScale from '../utilities/calculateScale';
import buildArray from '../utilities/buildArray';
import RadiusElement from '../elements/RadiusElement';
import '../styles/radius.css';

interface Props {
    baseRadiusSize: number
    radiusScaleFactor: number
    radiusSmallQuantity: number
    radiusLargeQuantity: number
    radiusScaleFormula: string
    baseSize: number
    baseScaleUnit: string
}

export default function Radius({
    baseRadiusSize,
    radiusScaleFactor,
    radiusSmallQuantity,
    radiusLargeQuantity,
    radiusScaleFormula,
    baseSize,
    baseScaleUnit,
}: Props) {

    let sizeArray = buildArray(radiusSmallQuantity, radiusLargeQuantity);
    const sizes = sizeArray.map((i) => {
        return calculateScale(
            baseRadiusSize,
            radiusScaleFactor,
            i,
            radiusScaleFormula,
        );
    });

    const radiusElements = sizes.map((size, i) => {
        return <RadiusElement
            key={`radius-${i}}`}
            radius={size}
            baseSize={baseSize}
            baseScaleUnit={baseScaleUnit}
        />;
    });

    return (
        <div className="column">
            <h3>Radius</h3>
            <div id="radiusWrapper">{radiusElements}</div>
        </div>
    );
};
