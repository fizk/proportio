import React from "react";
import capitalize from '../utilities/capitalize';
import ComponentSizeColumn from './ComponentSizeColumn';
import { ScaleFormulaType } from "../utilities/scaleFormulas";

interface Props {
    densityName: string
    sizeArray: number[]
    componentPaddingScale: number
    paddingXIndexArray: number[]
    componentPaddingMethodFormula: ScaleFormulaType
    paddingYIndexArray: number[]
    textSizeIndexArray: number[]
    iconSizeIndexArray: number[]
    iconScaleFormula: ScaleFormulaType
    componentScale: number
    componentMinHeightIndexArray: number[]
    componentScaleMethodFormula: ScaleFormulaType
    baseRadiusSize: number
    radiusScaleFactor: number
    componentRadiusIndexArray: number[]
    radiusScaleFormula: ScaleFormulaType
    sizeNamesDecrement: string[]
    sizeNamesIncrement: string[]
    componentLineHeight: number
    componentRadiusNewIndexValue: number
    scaleComponentRadius: number
    iconPadding: number
    showSpecs: boolean
    componentGapScale: number
    componentGapMethod: ScaleFormulaType
    gapIndexArray: number[]
    showComponentIcon: boolean
    showComponentText: boolean
    icon: any
    iconStroke: number
    baseScaleUnit: string
    baseSize: number
    typeScaleFormula: string
    typeScale: number
    iconScale: number
}

export default function Sizes ({
    densityName,
    sizeArray,
    componentPaddingScale,
    paddingXIndexArray,
    componentPaddingMethodFormula,
    paddingYIndexArray,
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
    sizeNamesDecrement,
    sizeNamesIncrement,
    componentLineHeight,
    componentRadiusNewIndexValue,
    scaleComponentRadius,
    iconPadding,
    showSpecs,
    componentGapScale,
    componentGapMethod,
    gapIndexArray,
    showComponentIcon,
    showComponentText,
    icon,
    iconStroke,
    baseScaleUnit,
    baseSize,
    typeScaleFormula,
    typeScale,
    iconScale,

}: Props) {

    const sizedComponents = sizeArray.map((size, increment) => {
        const decrementIndex = size * -1 - 1;
        let sizeName =
            size < 0 ? sizeNamesDecrement[decrementIndex] : sizeNamesIncrement[size];
        if (sizeName === undefined) sizeName = 'undefined';

        return (
            <ComponentSizeColumn
                key={`${sizeName}-${decrementIndex}`}
                density={densityName}
                sizeName={sizeName}
                increment={increment}
                componentPaddingScale={componentPaddingScale}
                paddingXIndexArray={paddingXIndexArray}
                componentPaddingMethodFormula={componentPaddingMethodFormula}
                paddingYIndexArray={paddingYIndexArray}
                textSizeIndexArray={textSizeIndexArray}
                iconSizeIndexArray={iconSizeIndexArray}
                iconScaleFormula={iconScaleFormula}
                componentScale={componentScale}
                componentMinHeightIndexArray={componentMinHeightIndexArray}
                componentScaleMethodFormula={componentScaleMethodFormula}
                baseRadiusSize={baseRadiusSize}
                radiusScaleFactor={radiusScaleFactor}
                componentRadiusIndexArray={componentRadiusIndexArray}
                radiusScaleFormula={radiusScaleFormula}
                componentLineHeight={componentLineHeight}
                componentRadiusNewIndexValue={componentRadiusNewIndexValue}
                scaleComponentRadius={scaleComponentRadius}
                iconPadding={iconPadding}
                showSpecs={showSpecs}
                showComponentIcon={showComponentIcon}
                showComponentText={showComponentText}
                componentGapScale={componentGapScale}
                componentGapMethod={componentGapMethod}
                gapIndexArray={gapIndexArray}

                icon={icon}
                iconStroke={iconStroke}
                baseScaleUnit={baseScaleUnit}
                baseSize={baseSize}
                typeScaleFormula={typeScaleFormula}
                typeScale={typeScale}
                iconScale={iconScale}
            />
        );
    });

    return (
        <div className="column column--fitContent">
            <div className="componentColumn_Heading">
                <h5>{capitalize(densityName)}</h5>
            </div>
            <div className="componentColumn">{sizedComponents}</div>
        </div>
    );
};
