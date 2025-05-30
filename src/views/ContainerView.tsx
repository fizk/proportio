import React, { MouseEvent, useState } from 'react';
import Panel from '../elements/Panel';
import ContainerControls from '../components/ContainerControls';
import Containers from '../components/Containers';
import { useBase } from '../context/BaseContext'

export default function ContainerView ()  {
    const [showSpecs, setShowSpecs] = useState<boolean>(true);
    const [containerElevation, setContainerElevation] = useState<boolean>(true);

    const {
        base: {
            containerSmallSizes, containerLargeSizes, containerBaseRadiusIndex,
            containerBaseElevationIndex, containerRadiusScaleFactor, containerBasePaddingXIndex,
            containerBasePaddingYIndex, containerPaddingFactorScale, containerPaddingMethodOption,
            baseSize, baseScaleUnit, baseElevationSize, elevationScaleFactor,
            elevationScaleFormula, elevationOffsetY, baseRadiusSize, radiusScaleFactor,
            radiusScaleFormula, spacingFormula, typeScaleFormula, typeScale, spacingScaleFactor
        },
        setContainerSmallSizes, setContainerLargeSizes, setContainerBaseRadiusIndex,
        setContainerBaseElevationIndex, setContainerRadiusScaleFactor, setContainerBasePaddingXIndex,
        setContainerBasePaddingYIndex, setContainerPaddingFactorScale, setContainerPaddingMethodOption
    } = useBase();

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
                    containerPaddingScaleFactor={containerPaddingFactorScale}
                    setContainerPaddingScaleFactor={setContainerPaddingFactorScale}
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
                    containerPaddingScaleFactor={containerPaddingFactorScale}
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
