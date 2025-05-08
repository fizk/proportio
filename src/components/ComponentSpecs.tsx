import React from 'react';
import { useRecoilState } from 'recoil';
import buildArray from '../utilities/buildArray';
import buildShiftedArray from '../utilities/buildShiftedArray';
import calculateScale from '../utilities/calculateScale';
import {
    sizeNamesIncrement,
    sizeNamesDecrement,
    densityNamesIncrement,
    densityNamesDecrement,
} from '../utilities/names';
import { typeScaleFormulaState, typeScaleState } from '../states/typography';
import {
    spacingFormulaState,
    spacingScaleFactorState,
} from '../states/spacing';
import {
    componentMinHeightMethodOptionState,
    componentSmallQuantityState,
    componentLargeQuantityState,
    baseComponentTextSizeIndexState,
    baseComponentSizeIndexState,
    scaleComponentRadiusState,
    baseComponentRadiusState,
    componentLineHeightState,
    componentPaddingMethodOptionState,
    baseComponentPaddingXIndexState,
    baseComponentPaddingYIndexState,
    componentDensitySmallQuantityState,
    componentDensityLargeQuantityState,
    componentDensityScaleFactorState,
} from '../states/components';
import {
    baseRadiusSizeState,
    radiusScaleFormulaState,
    radiusScaleFactorState,
} from '../states/radius';
import { iconScaleFormulaState, iconPaddingState } from '../states/iconography';
import {
    textIconGapIndexState,
    textIconIconSizeIndexState,
    textIconGapScaleFormulaState,
} from '../states/textIconPair';
import demoComponents from '../utilities/demoComponents';
// @ts-ignore
import Sizes from './Sizes';
import '../styles/iconography.css';
import { type ScaleFormulaType } from '../utilities/scaleFormulas';

interface Props {
    showSpecs: boolean
    showComponentIcon: boolean
    showComponentText: boolean
}

export default function ComponentSpecs(props: Props) {
    const [componentPaddingMethodOption] = useRecoilState(componentPaddingMethodOptionState);
    const [typeScale] = useRecoilState(typeScaleState);
    const [spacingScaleFactor] = useRecoilState(spacingScaleFactorState,);
    const [spacingFormula] = useRecoilState(spacingFormulaState);
    const [typeScaleFormula] = useRecoilState(typeScaleFormulaState,);
    const [componentMinHeightMethodOption] = useRecoilState(componentMinHeightMethodOptionState);
    const [componentSmallQuantity] = useRecoilState(componentSmallQuantityState,);
    const [componentLargeQuantity] = useRecoilState(componentLargeQuantityState,);
    const [baseComponentPaddingXIndex] = useRecoilState(baseComponentPaddingXIndexState);
    const [baseComponentPaddingYIndex] = useRecoilState(baseComponentPaddingYIndexState);
    // Should get rid of these two. Customizing adds unnecessary complexity
    const [baseComponentTextSizeIndex] = useRecoilState(baseComponentTextSizeIndexState);

    const [baseComponentSizeIndex] = useRecoilState(baseComponentSizeIndexState,);
    const [scaleComponentRadius] = useRecoilState(scaleComponentRadiusState,);
    const [baseComponentRadius] = useRecoilState(baseComponentRadiusState,);
    const [componentLineHeight] = useRecoilState(componentLineHeightState,);
    const [baseRadiusSize] = useRecoilState(baseRadiusSizeState);
    const [radiusScaleFormula] = useRecoilState(radiusScaleFormulaState,);
    const [radiusScaleFactor] = useRecoilState(radiusScaleFactorState,);
    const [iconScaleFormula] = useRecoilState(iconScaleFormulaState,);
    const [iconPadding] = useRecoilState(iconPaddingState);
    const [textIconGapIndex] = useRecoilState(textIconGapIndexState,);
    const [textIconIconSizeIndex] = useRecoilState(textIconIconSizeIndexState,);
    const [textIconGapScaleFormula] = useRecoilState(textIconGapScaleFormulaState,);
    const [componentDensitySmallQuantity] = useRecoilState(componentDensitySmallQuantityState);
    const [componentDensityLargeQuantity] = useRecoilState(componentDensityLargeQuantityState);
    const [componentDensityScaleFactor] = useRecoilState(componentDensityScaleFactorState);

    const showSpecs = props.showSpecs;
    const showComponentIcon = props.showComponentIcon;
    const showComponentText = props.showComponentText;

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
