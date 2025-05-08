import React from 'react';
import buildArray from '../utilities/buildArray';
import buildShiftedArray from '../utilities/buildShiftedArray';
import calculateScale from '../utilities/calculateScale';
import {
    sizeNamesIncrement,
    sizeNamesDecrement,
    densityNamesIncrement,
    densityNamesDecrement,
} from '../utilities/names';
import demoComponents from '../utilities/demoComponents';
import Sizes from '../elements/Sizes';
import '../styles/iconography.css';
import { type ScaleFormulaType } from '../utilities/scaleFormulas';

interface Props {
    showSpecs: boolean
    showComponentIcon: boolean
    showComponentText: boolean
    componentPaddingMethodOption: string
    typeScale: number
    spacingScaleFactor: number
    spacingFormula: string
    typeScaleFormula: string
    componentMinHeightMethodOption: string
    componentSmallQuantity: number
    componentLargeQuantity: number
    baseComponentPaddingXIndex: number
    baseComponentPaddingYIndex: number
    baseComponentTextSizeIndex: number
    baseComponentSizeIndex: number
    scaleComponentRadius: boolean
    baseComponentRadius: number
    componentLineHeight: number
    baseRadiusSize: number
    radiusScaleFormula: string
    radiusScaleFactor: number
    iconScaleFormula: string
    iconPadding: number
    textIconGapIndex: number
    textIconIconSizeIndex: number
    textIconGapScaleFormula: string
    componentDensitySmallQuantity: number
    componentDensityLargeQuantity: number
    componentDensityScaleFactor: number
}

export default function ComponentSpecs({
    showSpecs,
    showComponentIcon,
    showComponentText,
    componentPaddingMethodOption,
    typeScale,
    spacingScaleFactor,
    spacingFormula,
    typeScaleFormula,
    componentMinHeightMethodOption,
    componentSmallQuantity,
    componentLargeQuantity,
    baseComponentPaddingXIndex,
    baseComponentPaddingYIndex,
    baseComponentTextSizeIndex,
    baseComponentSizeIndex,
    scaleComponentRadius,
    baseComponentRadius,
    componentLineHeight,
    baseRadiusSize,
    radiusScaleFormula,
    radiusScaleFactor,
    iconScaleFormula,
    iconPadding,
    textIconGapIndex,
    textIconIconSizeIndex,
    textIconGapScaleFormula,
    componentDensitySmallQuantity,
    componentDensityLargeQuantity,
    componentDensityScaleFactor,}: Props) {

    const rowClassName = showSpecs ? 'row row--comfortable' : 'row row--spacious';

    demoComponents.length = 0;

    const componentPaddingScale =
        componentPaddingMethodOption === 'typeScale'
            ? typeScale
            : componentPaddingMethodOption === 'spacingScale'
                ? spacingScaleFactor
                : 1;
    const componentPaddingMethodFormula =
        componentPaddingMethodOption === 'typeScale'
            ? typeScaleFormula
            : componentPaddingMethodOption === 'spacingScale'
                ? spacingFormula
                : undefined;
    const componentScale =
        componentMinHeightMethodOption === 'typeScale'
            ? typeScale
            : componentMinHeightMethodOption === 'spacingScale'
                ? spacingScaleFactor
                : 1;
    const componentScaleMethodFormula =
        componentMinHeightMethodOption === 'typeScale'
            ? typeScaleFormula
            : componentMinHeightMethodOption === 'spacingScale'
                ? spacingFormula
                : undefined;
    const componentGapScale =
        textIconGapScaleFormula === 'typeScale'
            ? typeScale
            : textIconGapScaleFormula === 'spacingScale'
                ? spacingScaleFactor
                : 1;
    const componentGapMethod =
        textIconGapScaleFormula === 'typeScale'
            ? typeScaleFormula
            : textIconGapScaleFormula === 'spacingScale'
                ? spacingFormula
                : 1;


    /* Create array of size indexes to generate components */
    let sizeArray = buildArray(componentSmallQuantity, componentLargeQuantity);
    let densityArray = buildArray(
        componentDensitySmallQuantity,
        componentDensityLargeQuantity,
    );

    /* Create arrays of sub-element indexes */
    const densityPaddingXIndexArray = buildShiftedArray(
        componentDensitySmallQuantity,
        componentDensityLargeQuantity,
        baseComponentPaddingXIndex,
        componentDensityScaleFactor,
    );

    const densityPaddingYIndexArray = buildShiftedArray(
        componentDensitySmallQuantity,
        componentDensityLargeQuantity,
        baseComponentPaddingYIndex,
        componentDensityScaleFactor,
    );
    const gapIndexArray = buildShiftedArray(
        componentSmallQuantity,
        componentLargeQuantity,
        textIconGapIndex,
    );

    const textSizeIndexArray = buildShiftedArray(
        componentSmallQuantity,
        componentLargeQuantity,
        baseComponentTextSizeIndex,
    );
    const iconSizeIndexArray = buildShiftedArray(
        componentSmallQuantity,
        componentLargeQuantity,
        textIconIconSizeIndex,
    );
    const componentMinHeightIndexArray = buildShiftedArray(
        componentSmallQuantity,
        componentLargeQuantity,
        baseComponentSizeIndex,
    );
    const componentRadiusIndexArray = buildShiftedArray(
        componentSmallQuantity,
        componentLargeQuantity,
        baseComponentRadius,
    );

    const componentRadiusNewIndexValue = calculateScale(
        baseRadiusSize,
        radiusScaleFactor,
        baseComponentRadius,
        radiusScaleFormula as ScaleFormulaType,
    );

    /* Map each density */
    const densityComponents = densityArray.map((density, densityIncrement) => {
        const paddingXIndexArray = buildShiftedArray(
            componentSmallQuantity,
            componentLargeQuantity,
            densityPaddingXIndexArray[densityIncrement],
        );
        const paddingYIndexArray = buildShiftedArray(
            componentSmallQuantity,
            componentLargeQuantity,
            densityPaddingYIndexArray[densityIncrement],
        );

        const decrementIndex = density * -1 - 1;
        let densityName =
            density < 0
                ? densityNamesDecrement[decrementIndex]
                : densityNamesIncrement[density];
        if (densityName === undefined) densityName = 'undefined';

        return (
            <Sizes
                key={`${densityName}-${sizeArray}`}
                densityName={densityName}
                sizeArray={sizeArray}
                componentPaddingScale={componentPaddingScale}
                paddingXIndexArray={paddingXIndexArray}
                componentPaddingMethodFormula={componentPaddingMethodFormula as unknown as ScaleFormulaType}
                paddingYIndexArray={paddingYIndexArray}
                textSizeIndexArray={textSizeIndexArray}
                iconSizeIndexArray={iconSizeIndexArray}
                iconScaleFormula={iconScaleFormula as unknown as ScaleFormulaType}
                componentScale={componentScale}
                componentMinHeightIndexArray={componentMinHeightIndexArray}
                componentScaleMethodFormula={componentScaleMethodFormula as unknown as ScaleFormulaType}
                baseRadiusSize={baseRadiusSize}
                radiusScaleFactor={radiusScaleFactor}
                componentRadiusIndexArray={componentRadiusIndexArray}
                radiusScaleFormula={radiusScaleFormula as unknown as ScaleFormulaType}
                sizeNamesDecrement={sizeNamesDecrement}
                sizeNamesIncrement={sizeNamesIncrement}
                componentLineHeight={componentLineHeight}
                componentRadiusNewIndexValue={componentRadiusNewIndexValue}
                scaleComponentRadius={scaleComponentRadius as unknown as number}
                iconPadding={iconPadding}
                showSpecs={showSpecs}
                componentGapScale={componentGapScale}
                componentGapMethod={componentGapMethod as unknown as ScaleFormulaType}
                gapIndexArray={gapIndexArray}
                showComponentIcon={showComponentIcon}
                showComponentText={showComponentText}
            />
        );
    });

    return (
        <>
            <div className={rowClassName}>{densityComponents}</div>
        </>
    );
};
