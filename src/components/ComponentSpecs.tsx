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
    const [componentPaddingMethodOption, setComponentPaddingMethodOption] = useRecoilState(componentPaddingMethodOptionState);
    const [typeScale, setTypeScale] = useRecoilState(typeScaleState);
    const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(spacingScaleFactorState,);
    const [spacingFormula, setSpacingFormula] = useRecoilState(spacingFormulaState);
    const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(typeScaleFormulaState,);
    const [componentMinHeightMethodOption, setComponentMinHeightMethodOption] = useRecoilState(componentMinHeightMethodOptionState);
    const [componentSmallQuantity, setComponentSmallQuantity] = useRecoilState(componentSmallQuantityState,);
    const [componentLargeQuantity, setComponentLargeQuantity] = useRecoilState(componentLargeQuantityState,);
    const [baseComponentPaddingXIndex, setBaseComponentPaddingXIndex] = useRecoilState(baseComponentPaddingXIndexState);
    const [baseComponentPaddingYIndex, setBaseComponentPaddingYIndex] = useRecoilState(baseComponentPaddingYIndexState);
    // Should get rid of these two. Customizing adds unnecessary complexity
    const [baseComponentTextSizeIndex, setBaseComponentTextSizeIndex] = useRecoilState(baseComponentTextSizeIndexState);

    const [baseComponentSizeIndex, setBaseComponentSizeIndex] = useRecoilState(baseComponentSizeIndexState,);
    const [scaleComponentRadius, setScaleComponentRadiusState] = useRecoilState(scaleComponentRadiusState,);
    const [baseComponentRadius, setBaseComponentRadiusState] = useRecoilState(baseComponentRadiusState,);
    const [componentLineHeight, setComponentLineHeightState] = useRecoilState(componentLineHeightState,);
    const [baseRadiusSize, setBaseRadiusSize] = useRecoilState(baseRadiusSizeState);
    const [radiusScaleFormula, setRadiusScaleFormula] = useRecoilState(radiusScaleFormulaState,);
    const [radiusScaleFactor, setRadiusScaleFactor] = useRecoilState(radiusScaleFactorState,);
    const [iconScaleFormula, setIconScaleFormula] = useRecoilState(iconScaleFormulaState,);
    const [iconPadding, setIconPadding] = useRecoilState(iconPaddingState);
    const [textIconGapIndex, setTextIconGapIndex] = useRecoilState(textIconGapIndexState,);
    const [textIconIconSizeIndex, setTextIconIconSizeIndex] = useRecoilState(textIconIconSizeIndexState,);
    const [textIconGapScaleFormula, setTextIconGapScaleFormula] = useRecoilState(textIconGapScaleFormulaState,);
    const [componentDensitySmallQuantity, setComponentDensitySmallQuantity] = useRecoilState(componentDensitySmallQuantityState);
    const [componentDensityLargeQuantity, setComponentDensityLargeQuantity] = useRecoilState(componentDensityLargeQuantityState);
    const [componentDensityScaleFactor, setComponentDensityScaleFactor] = useRecoilState(componentDensityScaleFactorState);

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
