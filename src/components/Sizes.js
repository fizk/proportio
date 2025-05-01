import React from "react";
import capitalize from '../utilities/capitalize';
import ComponentSizeColumn from './ComponentSizeColumn';

export default function Sizes (props) {
    const densityName = props.densityName;
    const sizeArray = props.sizeArray;
    const componentPaddingScale = props.componentPaddingScale;
    const paddingXIndexArray = props.paddingXIndexArray;
    const componentPaddingMethodFormula = props.componentPaddingMethodFormula;
    const paddingYIndexArray = props.paddingYIndexArray;
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
    const sizeNamesDecrement = props.sizeNamesDecrement;
    const sizeNamesIncrement = props.sizeNamesIncrement;
    const componentLineHeight = props.componentLineHeight;
    const componentRadiusNewIndexValue = props.componentRadiusNewIndexValue;
    const scaleComponentRadius = props.scaleComponentRadius;
    const iconPadding = props.iconPadding;
    const showSpecs = props.showSpecs;
    const componentGapScale = props.componentGapScale;
    const componentGapMethod = props.componentGapMethod;
    const gapIndexArray = props.gapIndexArray;

    const showComponentIcon = props.showComponentIcon;
    const showComponentText = props.showComponentText;

    const sizedComponents = sizeArray.map((size, increment) => {
        const decrementIndex = size * -1 - 1;
        let sizeName =
            size < 0 ? sizeNamesDecrement[decrementIndex] : sizeNamesIncrement[size];
        if (sizeName === undefined) sizeName = 'undefined';

        return (
            <ComponentSizeColumn
                key={`${sizeName}-${decrementIndex}`}
                size={size}
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
