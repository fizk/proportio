import React, { MouseEvent, useState } from 'react';
import ComponentControls from '../components/ComponentControls';
import ComponentSpecs from '../components/ComponentSpecs';
import Panel from '../elements/Panel';
import { useRecoilState } from 'recoil';
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

import '../styles/tabs.css';

export default function ComponentsView() {
    const [showSpecs, setShowSpecs] = useState<boolean>(true);
    const [showComponentIcon, setShowComponentIcon] = useState<boolean>(true);
    const [showComponentText, setShowComponentText] = useState<boolean>(true);

    const [baseComponentSizeIndex, setBaseComponentSizeIndex] = useRecoilState(baseComponentSizeIndexState,);
    const [componentLineHeight, setComponentLineHeight] = useRecoilState(componentLineHeightState,);
    const [componentSmallQuantity, setComponentSmallQuantity] = useRecoilState(componentSmallQuantityState,);
    const [componentLargeQuantity, setComponentLargeQuantity] = useRecoilState(componentLargeQuantityState,);
    const [componentMinHeightMethodOption, setComponentMinHeightMethodOption] = useRecoilState(componentMinHeightMethodOptionState);
    const [componentPaddingMethodOption, setComponentPaddingMethodOption] = useRecoilState(componentPaddingMethodOptionState);
    const [baseComponentPaddingXIndex, setBaseComponentPaddingXIndex] = useRecoilState(baseComponentPaddingXIndexState);
    const [baseComponentPaddingYIndex, setBaseComponentPaddingYIndex] = useRecoilState(baseComponentPaddingYIndexState);
    const [scaleComponentRadius, setScaleComponentRadius] = useRecoilState(scaleComponentRadiusState,);
    const [baseComponentRadius, setBaseComponentRadius] = useRecoilState(baseComponentRadiusState,);
    const [componentDensitySmallQuantity, setComponentDensitySmallQuantity] = useRecoilState(componentDensitySmallQuantityState);
    const [componentDensityLargeQuantity, setComponentDensityLargeQuantity] = useRecoilState(componentDensityLargeQuantityState);
    const [componentDensityScaleFactor, setComponentDensityScaleFactor] = useRecoilState(componentDensityScaleFactorState);

    const [typeScale] = useRecoilState(typeScaleState);
    const [spacingScaleFactor] = useRecoilState(spacingScaleFactorState,);
    const [spacingFormula] = useRecoilState(spacingFormulaState);
    const [typeScaleFormula] = useRecoilState(typeScaleFormulaState,);
    // Should get rid of these two. Customizing adds unnecessary complexity
    const [baseComponentTextSizeIndex] = useRecoilState(baseComponentTextSizeIndexState);

    const [baseRadiusSize] = useRecoilState(baseRadiusSizeState);
    const [radiusScaleFormula] = useRecoilState(radiusScaleFormulaState,);
    const [radiusScaleFactor] = useRecoilState(radiusScaleFactorState,);
    const [iconScaleFormula] = useRecoilState(iconScaleFormulaState,);
    const [iconPadding] = useRecoilState(iconPaddingState);
    const [textIconGapIndex] = useRecoilState(textIconGapIndexState,);
    const [textIconIconSizeIndex] = useRecoilState(textIconIconSizeIndexState,);
    const [textIconGapScaleFormula] = useRecoilState(textIconGapScaleFormulaState,);

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
                />
            </main>
        </div>
    );
};
