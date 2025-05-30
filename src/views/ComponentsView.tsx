import React, { MouseEvent, useState } from 'react';
import ComponentControls from '../components/ComponentControls';
import ComponentSpecs from '../components/ComponentSpecs';
import Panel from '../elements/Panel';
import '../styles/tabs.css';

import { useBase } from '../context/BaseContext'

export default function ComponentsView() {
    const [showSpecs, setShowSpecs] = useState<boolean>(true);
    const [showComponentIcon, setShowComponentIcon] = useState<boolean>(true);
    const [showComponentText, setShowComponentText] = useState<boolean>(true);

    const {
        base: {
            baseComponentSizeIndex, componentLineHeight, componentSmallQuantity,
            componentLargeQuantity, componentMinHeightMethodOption, componentPaddingMethodOption,
            baseComponentPaddingXIndex, baseComponentPaddingYIndex, scaleComponentRadius,
            baseComponentRadius, componentDensitySmallQuantity, componentDensityLargeQuantity,
            componentDensityScaleFactor, typeScale, spacingScaleFactor, spacingFormula, typeScaleFormula,
            baseComponentTextSizeIndex, baseRadiusSize, radiusScaleFormula, radiusScaleFactor,
            iconScaleFormula, iconPadding, textIconGapIndex, textIconIconSizeIndex, textIconGapScaleFormula,
            icon, iconStroke, baseScaleUnit, baseSize, iconScale
        },
        setBaseComponentSizeIndex, setComponentLineHeight, setComponentSmallQuantity, setComponentLargeQuantity,
        setComponentMinHeightMethodOption, setComponentPaddingMethodOption, setBaseComponentPaddingXIndex,
        setBaseComponentPaddingYIndex, setScaleComponentRadius, setBaseComponentRadius,
        setComponentDensitySmallQuantity, setComponentDensityLargeQuantity, setComponentDensityScaleFactor
    } = useBase();

    return (
        <div className="splitView">
            <Panel direction="column">
                <ComponentControls
                    baseComponentSizeIndex={baseComponentSizeIndex}
                    setBaseComponentSizeIndex={setBaseComponentSizeIndex}
                    componentLineHeight={componentLineHeight}
                    setComponentLineHeight={setComponentLineHeight}
                    componentSmallQuantity={componentSmallQuantity}
                    setComponentSmallQuantity={setComponentSmallQuantity}
                    componentLargeQuantity={componentLargeQuantity}
                    setComponentLargeQuantity={setComponentLargeQuantity}
                    componentMinHeightMethodOption={componentMinHeightMethodOption}
                    setComponentMinHeightMethodOption={setComponentMinHeightMethodOption}
                    componentPaddingMethodOption={componentPaddingMethodOption}
                    setComponentPaddingMethodOption={setComponentPaddingMethodOption}
                    baseComponentPaddingXIndex={baseComponentPaddingXIndex}
                    setBaseComponentPaddingXIndex={setBaseComponentPaddingXIndex}
                    baseComponentPaddingYIndex={baseComponentPaddingYIndex}
                    setBaseComponentPaddingYIndex={setBaseComponentPaddingYIndex}
                    scaleComponentRadius={scaleComponentRadius}
                    setScaleComponentRadius={setScaleComponentRadius}
                    baseComponentRadius={baseComponentRadius}
                    setBaseComponentRadius={setBaseComponentRadius}
                    componentDensitySmallQuantity={componentDensitySmallQuantity}
                    setComponentDensitySmallQuantity={setComponentDensitySmallQuantity}
                    componentDensityLargeQuantity={componentDensityLargeQuantity}
                    setComponentDensityLargeQuantity={setComponentDensityLargeQuantity}
                    componentDensityScaleFactor={componentDensityScaleFactor}
                    setComponentDensityScaleFactor={setComponentDensityScaleFactor}
                />
            </Panel>

            <main className="demoRow apply-font-main">
                <div className="tabs_action">
                    <fieldset>
                        <div className="checkboxGroup">
                            <input
                                type="checkbox"
                                name="showComponentText"
                                id="showComponentText"
                                onClick={(event: MouseEvent<HTMLInputElement>) => (
                                    setShowComponentText(event.currentTarget.checked)
                                )}
                                defaultChecked={showComponentText ? true : false}
                            />
                            <label htmlFor="showComponentText">Show label</label>
                        </div>
                        <div className="checkboxGroup">
                            <input
                                type="checkbox"
                                name="showComponentIcon"
                                id="showComponentIcon"
                                onClick={(event: MouseEvent<HTMLInputElement>) => (
                                    setShowComponentIcon(event.currentTarget.checked)
                                )}
                                defaultChecked={showComponentIcon ? true : false}
                            />
                            <label htmlFor="showComponentIcon">Show icon</label>
                        </div>
                        <div className="checkboxGroup">
                            <input
                                type="checkbox"
                                name="showComponentSpecs"
                                id="showComponentSpecs"
                                onClick={(event: MouseEvent<HTMLInputElement>) => (
                                    setShowSpecs(event.currentTarget.checked)
                                )}
                                defaultChecked={showSpecs}
                            />
                            <label htmlFor="showComponentSpecs">Show component specs</label>
                        </div>
                    </fieldset>
                </div>

                <ComponentSpecs
                    showSpecs={showSpecs}
                    showComponentIcon={showComponentIcon}
                    showComponentText={showComponentText}
                    componentPaddingMethodOption={componentPaddingMethodOption}
                    typeScale={typeScale}
                    spacingScaleFactor={spacingScaleFactor}
                    spacingFormula={spacingFormula}
                    typeScaleFormula={typeScaleFormula}
                    componentMinHeightMethodOption={componentMinHeightMethodOption}
                    componentSmallQuantity={componentSmallQuantity}
                    componentLargeQuantity={componentLargeQuantity}
                    baseComponentPaddingXIndex={baseComponentPaddingXIndex}
                    baseComponentPaddingYIndex={baseComponentPaddingYIndex}
                    baseComponentTextSizeIndex={baseComponentTextSizeIndex}
                    baseComponentSizeIndex={baseComponentSizeIndex}
                    scaleComponentRadius={scaleComponentRadius}
                    baseComponentRadius={baseComponentRadius}
                    componentLineHeight={componentLineHeight}
                    baseRadiusSize={baseRadiusSize}
                    radiusScaleFormula={radiusScaleFormula}
                    radiusScaleFactor={radiusScaleFactor}
                    iconScaleFormula={iconScaleFormula}
                    iconPadding={iconPadding}
                    textIconGapIndex={textIconGapIndex}
                    textIconIconSizeIndex={textIconIconSizeIndex}
                    textIconGapScaleFormula={textIconGapScaleFormula}
                    componentDensitySmallQuantity={componentDensitySmallQuantity}
                    componentDensityLargeQuantity={componentDensityLargeQuantity}
                    componentDensityScaleFactor={componentDensityScaleFactor}
                    icon={icon}
                    iconStroke={iconStroke}
                    baseScaleUnit={baseScaleUnit}
                    baseSize={baseSize}
                    iconScale={iconScale}
                />
            </main>
        </div>
    );
};
