import React from 'react';
import SpacingControls from '../components/SpacingControls';
import Spacing from '../components/Spacing';
import Radius from '../components/Radius';
import RadiusControls from '../components/RadiusControls';
import Panel from '../elements/Panel';
import ElevationControls from '../components/ElevationControls';
import Elevation from '../components/Elevation';
import { useRecoilState } from 'recoil';
import {
    spacingScaleFactorState,
    spacingSmallQuantityState,
    spacingLargeQuantityState,
    spacingFormulaState,
} from '../states/spacing';
import {
    baseRadiusSizeState,
    radiusScaleFactorState,
    radiusSmallQuantityState,
    radiusLargeQuantityState,
    radiusScaleFormulaState,
} from '../states/radius';
import {
    baseElevationSizeState,
    elevationScaleFactorState,
    elevationSmallQuantityState,
    elevationLargeQuantityState,
    elevationScaleFormulaState,
    elevationOffsetYState,
} from '../states/elevation';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import '../styles/tabs.css';
import '../styles/toolbar.css';

export default function ShapesView() {
    const spacerLineHeight = 8;

    const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(spacingScaleFactorState,);
    const [spacingSmallQuantity, setSpacingSmallQuantity] = useRecoilState(spacingSmallQuantityState,);
    const [spacingLargeQuantity, setSpacingLargeQuantity] = useRecoilState(spacingLargeQuantityState,);
    const [spacingFormula] = useRecoilState(spacingFormulaState);

    const [baseRadiusSize, setBaseRadiusSize] = useRecoilState(baseRadiusSizeState);
    const [radiusScaleFactor, setRadiusScaleFactor] = useRecoilState(radiusScaleFactorState,);
    const [radiusSmallQuantity, setRadiusSmallQuantity] = useRecoilState(radiusSmallQuantityState,);
    const [radiusLargeQuantity, setRadiusLargeQuantity] = useRecoilState(radiusLargeQuantityState,);
    const [radiusScaleFormula, setRadiusScaleFormula] = useRecoilState(radiusScaleFormulaState,);

    const [baseElevationSize, setBaseElevationSize] = useRecoilState(baseElevationSizeState,);
    const [elevationScaleFactor, setElevationScaleFactor] = useRecoilState(elevationScaleFactorState,);
    const [elevationSmallQuantity, setElevationSmallQuantity] = useRecoilState(elevationSmallQuantityState,);
    const [elevationLargeQuantity, setElevationLargeQuantity] = useRecoilState(elevationLargeQuantityState,);
    const [elevationScaleFormula, setElevationScaleFormula] = useRecoilState(elevationScaleFormulaState,);
    const [elevationOffsetY, setElevationOffsetY] = useRecoilState(elevationOffsetYState,);

    const [baseSize] = useRecoilState(baseSizeState);
    const [baseScaleUnit] = useRecoilState(baseScaleUnitState);

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
                    spacingScaleFactor={spacingScaleFactor}
                    spacingSmallQuantity={spacingSmallQuantity}
                    spacingLargeQuantity={spacingLargeQuantity}
                    spacingFormula={spacingFormula}
                    baseScaleUnit={baseScaleUnit}
                />
                <Radius
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
                />
            </main>
        </div>
    );
};
