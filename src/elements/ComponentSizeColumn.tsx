import React from 'react';
import calculateScale from '../utilities/calculateScale';
import capitalize from '../utilities/capitalize';
import ComponentElement from './ComponentElement';
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

    icon: any
    iconStroke: number
    baseScaleUnit: string
    baseSize: number
    typeScaleFormula: string
    typeScale: number
    iconScale: number
}

export default function ComponentSizeColumn ({
    density,
    sizeName,
    componentPaddingScale,
    paddingXIndexArray,
    increment,
    paddingYIndexArray,
    componentPaddingMethodFormula,
    textSizeIndexArray,
    iconSizeIndexArray,
    iconScaleFormula,
    componentScale,
    componentMinHeightIndexArray,
    componentScaleMethodFormula,
    baseRadiusSize,
    radiusScaleFactor,
    componentRadiusIndexArray,
    radiusScaleFormula,
    componentLineHeight,
    componentRadiusNewIndexValue,
    scaleComponentRadius,
    iconPadding,
    showSpecs,
    showComponentIcon,
    showComponentText,
    componentGapScale,
    componentGapMethod,
    gapIndexArray,
    icon,
    iconStroke,
    baseScaleUnit,
    baseSize,
    typeScaleFormula,
    typeScale,
    iconScale,
}: Props)  {
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
                    icon={icon}
                    iconStroke={iconStroke}
                    baseScaleUnit={baseScaleUnit}
                    baseSize={baseSize}
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
                icon={icon}
                iconStroke={iconStroke}
                baseScaleUnit={baseScaleUnit}
                baseSize={baseSize}
            />
        </div>
    );
};
