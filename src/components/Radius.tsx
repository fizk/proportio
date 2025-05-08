import React from 'react';
import { useRecoilState } from 'recoil';
import calculateScale from '../utilities/calculateScale';
import buildArray from '../utilities/buildArray';
import RadiusElement from './RadiusElement';
import {
    baseRadiusSizeState,
    radiusScaleFactorState,
    radiusSmallQuantityState,
    radiusLargeQuantityState,
    radiusScaleFormulaState,
} from '../states/radius';
import '../styles/radius.css';

export default function Radius() {
    const [baseRadiusSize] = useRecoilState(baseRadiusSizeState);
    const [radiusScaleFactor] = useRecoilState(radiusScaleFactorState,);
    const [radiusSmallQuantity] = useRecoilState(radiusSmallQuantityState,);
    const [radiusLargeQuantity] = useRecoilState(radiusLargeQuantityState,);
    const [radiusScaleFormula] = useRecoilState(radiusScaleFormulaState,);

    let sizeArray = buildArray(radiusSmallQuantity, radiusLargeQuantity);
    const sizes = sizeArray.map((i) => {
        return calculateScale(
            baseRadiusSize,
            radiusScaleFactor,
            i,
            radiusScaleFormula,
        );
    });

    const radiusElements = sizes.map((size, i) => {
        return <RadiusElement key={`radius-${i}}`} radius={size} />;
    });

    return (
        <div className="column">
            <h3>Radius</h3>
            <div id="radiusWrapper">{radiusElements}</div>
        </div>
    );
};
