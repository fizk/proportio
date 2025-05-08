import React from 'react';
import { useRecoilState } from 'recoil';
import calculateScale from '../utilities/calculateScale';
import buildArray from '../utilities/buildArray';
import ContainerElement from './ContainerElement';
import {
    spacingFormulaState,
    spacingScaleFactorState,
} from '../states/spacing';
import { sizeNamesIncrement, sizeNamesDecrement } from '../utilities/names';
import { typeScaleFormulaState, typeScaleState } from '../states/typography';
import {
    baseElevationSizeState,
    elevationScaleFactorState,
    elevationScaleFormulaState,
    elevationOffsetYState,
} from '../states/elevation';
import {
    containerSmallSizesState,
    containerLargeSizesState,
    containerBaseRadiusIndexState,
    containerBaseElevationIndexState,
    containerRadiusScaleFactorState,
    containerPaddingMethodOptionState,
    containerBasePaddingXIndexState,
    containerBasePaddingYIndexState,
    containerPaddingScaleFactorState,
} from '../states/containers';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import round from '../utilities/round';
import buildShiftedArray from '../utilities/buildShiftedArray';
import {
    baseRadiusSizeState,
    radiusScaleFactorState,
    radiusScaleFormulaState,
} from '../states/radius';
import '../styles/elevation.css';
import { type ScaleMethodType } from '../utilities/scaleMethodOptions';
import { type ScaleFormulaType } from '../utilities/scaleFormulas';

interface Props {
    showSpecs: boolean
    containerElevation: boolean
}

export default function Containers(props: Props) {
    const [baseSize] = useRecoilState(baseSizeState);
    const [baseScaleUnit] = useRecoilState(baseScaleUnitState);
    const [baseElevationSize] = useRecoilState(baseElevationSizeState,);
    const [elevationScaleFactor] = useRecoilState(elevationScaleFactorState,);
    const [elevationScaleFormula] = useRecoilState(elevationScaleFormulaState,);
    const [elevationOffsetY] = useRecoilState(elevationOffsetYState,);
    const [containerSmallSizes] = useRecoilState(containerSmallSizesState,);
    const [containerLargeSizes] = useRecoilState(containerLargeSizesState,);
    const [containerBaseRadiusIndex] = useRecoilState(containerBaseRadiusIndexState);
    const [containerBaseElevationIndex] = useRecoilState(containerBaseElevationIndexState);
    const [containerRadiusScaleFactor] = useRecoilState(containerRadiusScaleFactorState);
    const [containerPaddingMethodOption] = useRecoilState(containerPaddingMethodOptionState);
    const [containerBasePaddingXIndex] = useRecoilState(containerBasePaddingXIndexState);
    const [containerBasePaddingYIndex] = useRecoilState(containerBasePaddingYIndexState);
    const [containerPaddingScaleFactor] = useRecoilState(containerPaddingScaleFactorState);
    const [baseRadiusSize] = useRecoilState(baseRadiusSizeState);
    const [radiusScaleFactor] = useRecoilState(radiusScaleFactorState,);
    const [radiusScaleFormula] = useRecoilState(radiusScaleFormulaState,);
    const [spacingFormula] = useRecoilState(spacingFormulaState);
    const [typeScaleFormula] = useRecoilState(typeScaleFormulaState,);
    const [typeScale] = useRecoilState(typeScaleState);
    const [spacingScaleFactor] = useRecoilState(spacingScaleFactorState,);
    const showSpecs = props.showSpecs;
    const containerElevation = props.containerElevation;

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
            />
        );
    });

    return (
        <div className="column">
            <div id="containerWrapper">{containerElements}</div>
        </div>
    );
};
