import React from 'react';
import SpacingControls from '../components/SpacingControls';
import Spacing from '../components/Spacing';
import Radius from '../components/Radius';
import RadiusControls from '../components/RadiusControls';
import Panel from '../elements/Panel';
import ElevationControls from '../components/ElevationControls';
import Elevation from '../components/Elevation';
import { useBase } from '../context/BaseContext'
import '../styles/tabs.css';
import '../styles/toolbar.css';

export default function ShapesView() {
    const {
        base: {
            spacingScaleFactor, spacingSmallQuantity, spacingLargeQuantity, spacingFormula,
            baseRadiusSize, radiusScaleFactor, radiusSmallQuantity, radiusLargeQuantity,
            radiusScaleFormula, baseElevationSize, elevationScaleFactor, elevationSmallQuantity,
            elevationLargeQuantity, elevationScaleFormula, elevationOffsetY, baseSize, baseScaleUnit
        },
        setSpacingScaleFactor, setSpacingSmallQuantity,
        setSpacingLargeQuantity, setBaseRadiusSize, setRadiusScaleFactor, setRadiusSmallQuantity,
        setRadiusLargeQuantity, setRadiusScaleFormula, setBaseElevationSize, setElevationScaleFactor,
        setElevationSmallQuantity, setElevationLargeQuantity, setElevationScaleFormula, setElevationOffsetY
    } = useBase();

    return (
        <div className="splitView">
            <Panel direction="column">
                <SpacingControls
                    spacingScaleFactor={spacingScaleFactor}
                    setSpacingScaleFactor={setSpacingScaleFactor}
                    spacingSmallQuantity={spacingSmallQuantity}
                    setSpacingSmallQuantity={setSpacingSmallQuantity}
                    spacingLargeQuantity={spacingLargeQuantity}
                    setSpacingLargeQuantity={setSpacingLargeQuantity}
                    spacingFormula={spacingFormula}
                />
                <RadiusControls
                    baseRadiusSize={baseRadiusSize}
                    setBaseRadiusSize={setBaseRadiusSize}
                    radiusScaleFactor={radiusScaleFactor}
                    setRadiusScaleFactor={setRadiusScaleFactor}
                    radiusSmallQuantity={radiusSmallQuantity}
                    setRadiusSmallQuantity={setRadiusSmallQuantity}
                    radiusLargeQuantity={radiusLargeQuantity}
                    setRadiusLargeQuantity={setRadiusLargeQuantity}
                    radiusScaleFormula={radiusScaleFormula}
                    setRadiusScaleFormula={setRadiusScaleFormula}
                />
                <ElevationControls
                    baseElevationSize={baseElevationSize}
                    setBaseElevationSize={setBaseElevationSize}
                    elevationScaleFactor={elevationScaleFactor}
                    setElevationScaleFactor={setElevationScaleFactor}
                    elevationSmallQuantity={elevationSmallQuantity}
                    setElevationSmallQuantity={setElevationSmallQuantity}
                    elevationLargeQuantity={elevationLargeQuantity}
                    setElevationLargeQuantity={setElevationLargeQuantity}
                    elevationScaleFormula={elevationScaleFormula}
                    setElevationScaleFormula={setElevationScaleFormula}
                    elevationOffsetY={elevationOffsetY}
                    setElevationOffsetY={setElevationOffsetY}
                />
            </Panel>
            <main className="demoRow apply-font-main">
                <Spacing
                    baseSize={baseSize}
                    baseScaleUnit={baseScaleUnit}
                    spacingScaleFactor={spacingScaleFactor}
                    spacingSmallQuantity={spacingSmallQuantity}
                    spacingLargeQuantity={spacingLargeQuantity}
                    spacingFormula={spacingFormula}
                />
                <Radius
                    baseSize={baseSize}
                    baseScaleUnit={baseScaleUnit}
                    baseRadiusSize={baseRadiusSize}
                    radiusScaleFactor={radiusScaleFactor}
                    radiusSmallQuantity={radiusSmallQuantity}
                    radiusLargeQuantity={radiusLargeQuantity}
                    radiusScaleFormula={radiusScaleFormula}
                />
                <Elevation
                    baseElevationSize={baseElevationSize}
                    elevationScaleFactor={elevationScaleFactor}
                    elevationSmallQuantity={elevationSmallQuantity}
                    elevationLargeQuantity={elevationLargeQuantity}
                    elevationScaleFormula={elevationScaleFormula}
                    elevationOffsetY={elevationOffsetY}
                    baseSize={baseSize}
                    baseScaleUnit={baseScaleUnit}
                />
            </main>
        </div>
    );
};
