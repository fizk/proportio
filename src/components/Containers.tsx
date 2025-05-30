import React from 'react';
import calculateScale from '../utilities/calculateScale';
import buildArray from '../utilities/buildArray';
import ContainerElement from '../elements/ContainerElement';
import { sizeNamesIncrement, sizeNamesDecrement } from '../utilities/names';
import round from '../utilities/round';
import buildShiftedArray from '../utilities/buildShiftedArray';
import { type ScaleMethodType } from '../utilities/scaleMethodOptions';
import { type ScaleFormulaType } from '../utilities/scaleFormulas';
import '../styles/elevation.css';

interface Props {
    showSpecs: boolean
    containerElevation: boolean
    baseSize: number
    baseScaleUnit: string
    baseElevationSize: number
    elevationScaleFactor: number
    elevationScaleFormula: string
    elevationOffsetY: number
    containerSmallSizes: number
    containerLargeSizes: number
    containerBaseRadiusIndex: number
    containerBaseElevationIndex: number
    containerRadiusScaleFactor: number
    containerPaddingMethodOption: string
    containerBasePaddingXIndex: number
    containerBasePaddingYIndex: number
    containerPaddingScaleFactor: number
    baseRadiusSize: number
    radiusScaleFactor: number
    radiusScaleFormula: string
    spacingFormula: string
    typeScaleFormula: string
    typeScale: number
    spacingScaleFactor: number
}

export default function Containers({
    showSpecs,
    containerElevation,
    baseSize,
    baseScaleUnit,
    baseElevationSize,
    elevationScaleFactor,
    elevationScaleFormula,
    elevationOffsetY,
    containerSmallSizes,
    containerLargeSizes,
    containerBaseRadiusIndex,
    containerBaseElevationIndex,
    containerRadiusScaleFactor,
    containerPaddingMethodOption,
    containerBasePaddingXIndex,
    containerBasePaddingYIndex,
    containerPaddingScaleFactor,
    baseRadiusSize,
    radiusScaleFactor,
    radiusScaleFormula,
    spacingFormula,
    typeScaleFormula,
    typeScale,
    spacingScaleFactor,
}: Props) {
    const containerPaddingMethod =
        containerPaddingMethodOption === 'typeScale'
            ? typeScale
            : spacingScaleFactor;
    let sizeArray = buildArray(containerSmallSizes, containerLargeSizes);
    let elevationsArray = buildShiftedArray(
        containerSmallSizes,
        containerLargeSizes,
        containerBaseElevationIndex,
    );

    const radiusArray = buildShiftedArray(
        containerSmallSizes,
        containerLargeSizes,
        containerBaseRadiusIndex,
        containerRadiusScaleFactor,
    );

    const paddingYIndexArray = buildShiftedArray(
        containerSmallSizes,
        containerLargeSizes,
        containerBasePaddingYIndex,
        containerPaddingScaleFactor,
    );
    const paddingXIndexArray = buildShiftedArray(
        containerSmallSizes,
        containerLargeSizes,
        containerBasePaddingXIndex,
        containerPaddingScaleFactor,
    );

    const containerPaddingMethodFormula =
        containerPaddingMethodOption === 'typeScale'
            ? typeScaleFormula
            : containerPaddingMethodOption === 'spacingScale'
                ? spacingFormula
                : undefined;

    const containerElements = sizeArray.map((size, i) => {
        const decrementIndex = size * -1 - 1;
        let sizeName =
            size < 0 ? sizeNamesDecrement[decrementIndex] : sizeNamesIncrement[size];
        if (sizeName === undefined) sizeName = 'undefined';
        const elevation = containerElevation
            ? calculateScale(
                baseElevationSize,
                elevationScaleFactor,
                elevationsArray[i],
                elevationScaleFormula,
            )
            : undefined;
        const offset = (elevation || 1) * (elevationOffsetY / 100);

        const paddingXvalue = calculateScale(
            baseSize,
            containerPaddingMethod,
            paddingXIndexArray[i],
            containerPaddingMethodFormula as ScaleMethodType,
        );
        const paddingYvalue = calculateScale(
            baseSize,
            containerPaddingMethod,
            paddingYIndexArray[i],
            containerPaddingMethodFormula as ScaleMethodType,
        );
        const radiusValue = calculateScale(
            baseRadiusSize,
            radiusScaleFactor,
            radiusArray[i],
            radiusScaleFormula as ScaleFormulaType,
        );
        const paddingX =
            baseScaleUnit === 'px'
                ? round(paddingXvalue)
                : round(paddingXvalue / baseSize, 3);
        const paddingY =
            baseScaleUnit === 'px'
                ? round(paddingYvalue)
                : round(paddingYvalue / baseSize, 3);
        const radius =
            baseScaleUnit === 'px' ? radiusValue : round(radiusValue / baseSize, 3);

        return (
            <ContainerElement
                key={`container-${i}}`}
                offsetY={offset}
                elevation={elevation!}
                paddingX={paddingX}
                paddingY={paddingY}
                radius={radius}
                spec={showSpecs}
                sizeName={sizeName}
                containerElevation={containerElevation}
                baseScaleUnit={baseScaleUnit}
                baseSize={baseSize}
            />
        );
    });

    return (
        <div className="column">
            <div id="containerWrapper">{containerElements}</div>
        </div>
    );
};
