import React from 'react';
import calculateScale from '../utilities/calculateScale';
import capitalize from '../utilities/capitalize';
import ComponentElement from './ComponentElement';
import { useRecoilState } from 'recoil';
import { baseSizeState } from '../states/base';
import { typeScaleFormulaState, typeScaleState } from '../states/typography';
import { iconScaleState } from '../states/iconography';
import demoComponents from '../utilities/demoComponents';
import { type ScaleFormulaType } from '../utilities/scaleFormulas';

interface Props {
    density: string
    sizeName: string
    componentPaddingScale: number
    paddingXIndexArray: number[]
    increment: number
    paddingYIndexArray: number[]
    componentPaddingMethodFormula: ScaleFormulaType
    textSizeIndexArray: number[]
    iconSizeIndexArray: number[]
    iconScaleFormula: ScaleFormulaType
    componentScale: number
    componentMinHeightIndexArray: number[]
    componentScaleMethodFormula:  ScaleFormulaType
    baseRadiusSize: number
    radiusScaleFactor: number
    componentRadiusIndexArray: number[]
    radiusScaleFormula:  ScaleFormulaType
    componentLineHeight: number
    componentRadiusNewIndexValue: number
    scaleComponentRadius: number
    iconPadding: number
    showSpecs: boolean
    showComponentIcon: boolean
    showComponentText: boolean
    componentGapScale: number
    componentGapMethod: ScaleFormulaType
    gapIndexArray: number[]
}

export default function ComponentSizeColumn (props: Props)  {
    const [baseSize] = useRecoilState(baseSizeState);
    const [typeScaleFormula] = useRecoilState(typeScaleFormulaState,);
    const [typeScale] = useRecoilState(typeScaleState);
    const [iconScale] = useRecoilState(iconScaleState);

    const density = props.density;
    const sizeName = props.sizeName;
    const componentPaddingScale = props.componentPaddingScale;
    const paddingXIndexArray = props.paddingXIndexArray;
    const increment = props.increment;
    const paddingYIndexArray = props.paddingYIndexArray;
    const componentPaddingMethodFormula = props.componentPaddingMethodFormula;
    const textSizeIndexArray = props.textSizeIndexArray;
    const iconSizeIndexArray = props.iconSizeIndexArray;
    const iconScaleFormula = props.iconScaleFormula;

    const componentScale = props.componentScale;
    const componentMinHeightIndexArray = props.componentMinHeightIndexArray;
    const componentScaleMethodFormula = props.componentScaleMethodFormula;
    const baseRadiusSize = props.baseRadiusSize;
    const radiusScaleFactor = props.radiusScaleFactor;
    const componentRadiusIndexArray = props.componentRadiusIndexArray;
    const radiusScaleFormula = props.radiusScaleFormula;

    const componentLineHeight = props.componentLineHeight;
    const componentRadiusNewIndexValue = props.componentRadiusNewIndexValue;
    const scaleComponentRadius = props.scaleComponentRadius;
    const iconPadding = props.iconPadding;

    const showSpecs = props.showSpecs;
    const showComponentIcon = props.showComponentIcon;
    const showComponentText = props.showComponentText;

    const componentGapScale = props.componentGapScale;
    const componentGapMethod = props.componentGapMethod;
    const gapIndexArray = props.gapIndexArray;

    const gapSize = calculateScale(
        baseSize,
        componentGapScale,
        gapIndexArray[increment],
        componentGapMethod,
    );

    const paddingX = calculateScale(
        baseSize,
        componentPaddingScale,
        paddingXIndexArray[increment],
        componentPaddingMethodFormula,
    );
    const paddingY = calculateScale(
        baseSize,
        componentPaddingScale,
        paddingYIndexArray[increment],
        componentPaddingMethodFormula,
    );

    const typeSize = calculateScale(
        baseSize,
        typeScale,
        textSizeIndexArray[increment],
        typeScaleFormula as ScaleFormulaType,
    );

    const iconSize = calculateScale(
        baseSize,
        iconScale,
        iconSizeIndexArray[increment],
        iconScaleFormula,
    );

    const componentMinHeight = calculateScale(
        baseSize,
        componentScale,
        componentMinHeightIndexArray[increment],
        componentScaleMethodFormula,
    );
    const scaledComponentRadius = calculateScale(
        baseRadiusSize,
        radiusScaleFactor,
        componentRadiusIndexArray[increment],
        radiusScaleFormula,
    );

    const radius = scaleComponentRadius
        ? scaledComponentRadius
        : componentRadiusNewIndexValue;

    // Make sure the current entry is not already in demoComponents
    const result = demoComponents.find(
        (item: {name: string}) => item.name === `component-${density}-${sizeName}`,
    );

    if (!result)
        demoComponents.push({
            name: `component-${density}-${sizeName}`,
            value: (
                <ComponentElement
                    key={`component-${density}-${sizeName}`}
                    componentMinHeight={componentMinHeight}
                    paddingX={paddingX}
                    paddingY={paddingY}
                    typeSize={typeSize}
                    iconSize={iconSize}
                    iconPadding={iconPadding}
                    gapSize={gapSize}
                    componentLineHeight={componentLineHeight}
                    spec={false}
                    showComponentIcon={showComponentIcon}
                    showComponentText={showComponentText}
                    radius={radius}
                />
            ),
        });

    return (
        <div
            className="specRowItem"
            key={`componenSpecItem${sizeName}${componentMinHeight}`}
        >
            <h5> {capitalize(sizeName)} </h5>
            <ComponentElement
                key={`component${sizeName}${componentMinHeight}`}
                componentMinHeight={componentMinHeight}
                paddingX={paddingX}
                paddingY={paddingY}
                typeSize={typeSize}
                iconSize={iconSize}
                iconPadding={iconPadding}
                gapSize={gapSize}
                componentLineHeight={componentLineHeight}
                spec={showSpecs}
                showComponentIcon={showComponentIcon}
                showComponentText={showComponentText}
                radius={radius}
            />
        </div>
    );
};
