import React, { MouseEvent, useState } from 'react';
import Panel from '../elements/Panel';
import ContainerControls from '../components/ContainerControls';
import Containers from '../components/Containers';
import {
    containerSmallSizesState,
    containerLargeSizesState,
    containerBaseRadiusIndexState,
    containerBaseElevationIndexState,
    containerRadiusScaleFactorState,
    containerPaddingScaleFactorState,
    containerPaddingMethodOptionState,
    containerBasePaddingXIndexState,
    containerBasePaddingYIndexState,
} from '../states/containers';
import {
    spacingFormulaState,
    spacingScaleFactorState,
} from '../states/spacing';
import { typeScaleFormulaState, typeScaleState } from '../states/typography';
import {
    baseElevationSizeState,
    elevationScaleFactorState,
    elevationScaleFormulaState,
    elevationOffsetYState,
} from '../states/elevation';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import {
    baseRadiusSizeState,
    radiusScaleFactorState,
    radiusScaleFormulaState,
} from '../states/radius';
import { useRecoilState } from 'recoil';

export default function ContainerView ()  {
    const [showSpecs, setShowSpecs] = useState<boolean>(true);
    const [containerElevation, setContainerElevation] = useState<boolean>(true);

    const [containerSmallSizes, setContainerSmallSizes] = useRecoilState(containerSmallSizesState,);
    const [containerLargeSizes, setContainerLargeSizes] = useRecoilState(containerLargeSizesState,);
    const [containerBaseRadiusIndex, setContainerBaseRadiusIndex] = useRecoilState(containerBaseRadiusIndexState);
    const [containerBaseElevationIndex, setContainerBaseElevationIndex] = useRecoilState(containerBaseElevationIndexState);
    const [containerRadiusScaleFactor, setContainerRadiusScaleFactor] = useRecoilState(containerRadiusScaleFactorState);
    const [containerBasePaddingXIndex, setContainerBasePaddingXIndex] = useRecoilState(containerBasePaddingXIndexState);
    const [containerBasePaddingYIndex, setContainerBasePaddingYIndex] = useRecoilState(containerBasePaddingYIndexState);
    const [containerPaddingScaleFactor, setContainerPaddingScaleFactor] = useRecoilState(containerPaddingScaleFactorState);
    const [containerPaddingMethodOption, setContainerPaddingMethodOption] = useRecoilState(containerPaddingMethodOptionState);

    const [baseSize] = useRecoilState(baseSizeState);
    const [baseScaleUnit] = useRecoilState(baseScaleUnitState);
    const [baseElevationSize] = useRecoilState(baseElevationSizeState,);
    const [elevationScaleFactor] = useRecoilState(elevationScaleFactorState,);
    const [elevationScaleFormula] = useRecoilState(elevationScaleFormulaState,);
    const [elevationOffsetY] = useRecoilState(elevationOffsetYState,);
    const [baseRadiusSize] = useRecoilState(baseRadiusSizeState);
    const [radiusScaleFactor] = useRecoilState(radiusScaleFactorState,);
    const [radiusScaleFormula] = useRecoilState(radiusScaleFormulaState,);
    const [spacingFormula] = useRecoilState(spacingFormulaState);
    const [typeScaleFormula] = useRecoilState(typeScaleFormulaState,);
    const [typeScale] = useRecoilState(typeScaleState);
    const [spacingScaleFactor] = useRecoilState(spacingScaleFactorState,);

    return (
        <div className="splitView">
            <Panel direction="column">
                <ContainerControls
                    containerElevation={containerElevation}
                    setContainerElevation={setContainerElevation}
                    containerSmallSizes={containerSmallSizes}
                    setContainerSmallSizes={setContainerSmallSizes}
                    containerLargeSizes={containerLargeSizes}
                    setContainerLargeSizes={setContainerLargeSizes}
                    containerBaseRadiusIndex={containerBaseRadiusIndex}
                    setContainerBaseRadiusIndex={setContainerBaseRadiusIndex}
                    containerBaseElevationIndex={containerBaseElevationIndex}
                    setContainerBaseElevationIndex={setContainerBaseElevationIndex}
                    containerRadiusScaleFactor={containerRadiusScaleFactor}
                    setContainerRadiusScaleFactor={setContainerRadiusScaleFactor}
                    containerBasePaddingXIndex={containerBasePaddingXIndex}
                    setContainerBasePaddingXIndex={setContainerBasePaddingXIndex}
                    containerBasePaddingYIndex={containerBasePaddingYIndex}
                    setContainerBasePaddingYIndex={setContainerBasePaddingYIndex}
                    containerPaddingScaleFactor={containerPaddingScaleFactor}
                    setContainerPaddingScaleFactor={setContainerPaddingScaleFactor}
                    containerPaddingMethodOption={containerPaddingMethodOption}
                    setContainerPaddingMethodOption={setContainerPaddingMethodOption}
                />
            </Panel>

            <main className="demoRow demoRow--compact apply-font-main">
                <div className="tabs_action">
                    <fieldset>
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
                            <label htmlFor="showComponentSpecs">Show container specs</label>
                        </div>
                    </fieldset>
                </div>
                <Containers
                    showSpecs={showSpecs}
                    containerElevation={containerElevation}
                    baseSize={baseSize}
                    baseScaleUnit={baseScaleUnit}
                    baseElevationSize={baseElevationSize}
                    elevationScaleFactor={elevationScaleFactor}
                    elevationScaleFormula={elevationScaleFormula}
                    elevationOffsetY={elevationOffsetY}
                    containerSmallSizes={containerSmallSizes}
                    containerLargeSizes={containerLargeSizes}
                    containerBaseRadiusIndex={containerBaseRadiusIndex}
                    containerBaseElevationIndex={containerBaseElevationIndex}
                    containerRadiusScaleFactor={containerRadiusScaleFactor}
                    containerPaddingMethodOption={containerPaddingMethodOption}
                    containerBasePaddingXIndex={containerBasePaddingXIndex}
                    containerBasePaddingYIndex={containerBasePaddingYIndex}
                    containerPaddingScaleFactor={containerPaddingScaleFactor}
                    baseRadiusSize={baseRadiusSize}
                    radiusScaleFactor={radiusScaleFactor}
                    radiusScaleFormula={radiusScaleFormula}
                    spacingFormula={spacingFormula}
                    typeScaleFormula={typeScaleFormula}
                    typeScale={typeScale}
                    spacingScaleFactor={spacingScaleFactor}
                />
            </main>
        </div>
    );
};
