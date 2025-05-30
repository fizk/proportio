import React from 'react';
import calculateScale from '../utilities/calculateScale';
import buildArray from '../utilities/buildArray';
import ElevationElement from '../elements/ElevationElement';
import '../styles/elevation.css';

interface Props {
    baseElevationSize: number
    elevationScaleFactor: number
    elevationSmallQuantity: number
    elevationLargeQuantity: number
    elevationScaleFormula: string
    elevationOffsetY: number
    baseScaleUnit: string
    baseSize: number
}

export default function Elevation({
    baseElevationSize,
    elevationScaleFactor,
    elevationSmallQuantity,
    elevationLargeQuantity,
    elevationScaleFormula,
    elevationOffsetY,
    baseScaleUnit,
    baseSize,
}: Props) {
    let sizeArray = buildArray(elevationSmallQuantity, elevationLargeQuantity);
    const sizes = sizeArray.map((i) => {
        return calculateScale(
            baseElevationSize,
            elevationScaleFactor,
            i,
            elevationScaleFormula,
        );
    });
    const offsets = sizes.map((size) => {
        return size * (elevationOffsetY / 100);
    });

    const elevationElements = sizes.map((size, i) => {
        return (
            <ElevationElement
                key={`elevation-${i}}`}
                offsetY={offsets[i]}
                elevation={size}
                baseSize={baseSize}
                baseScaleUnit={baseScaleUnit}
            />
        );
    });

    return (
        <div className="column">
            <h3>Elevation</h3>
            <div id="elevationWrapper">{elevationElements}</div>
        </div>
    );
};
