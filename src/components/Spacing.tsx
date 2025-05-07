import React from 'react';
import { useRecoilState } from 'recoil';
import SpacingElement from './SpacingElement';
import calculateScale from '../utilities/calculateScale';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import {
    spacingScaleFactorState,
    spacingSmallQuantityState,
    spacingLargeQuantityState,
    spacingFormulaState,
} from '../states/spacing';
import round from '../utilities/round';
import '../styles/spacing.css';

interface Props {
    spacerLineHeight: number
}

export default function Spacing({spacerLineHeight}: Props) {
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(spacingScaleFactorState,);
    const [spacingSmallQuantity, setSpacingSmallQuantity] = useRecoilState(spacingSmallQuantityState,);
    const [spacingLargeQuantity, setSpacingLargeQuantity] = useRecoilState(spacingLargeQuantityState,);
    const [spacingFormula, setSpacingFormula] = useRecoilState(spacingFormulaState);
    const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState);

    let smallSizeArray = new Array(spacingSmallQuantity).fill(0);
    let largeSizeArray = new Array(spacingLargeQuantity).fill(0);

    smallSizeArray = smallSizeArray.map((e, i) => {
        let increment = (i + 1) * -1;
        const size = Math.round(
            calculateScale(baseSize, spacingScaleFactor, increment, spacingFormula),
        );
        const name = `spacing-${100 + increment * 10}`;
        const value = baseScaleUnit === 'px' ? size : round(size / baseSize, 3);

        return size;
    });
    smallSizeArray = smallSizeArray.reverse();
    largeSizeArray = largeSizeArray.map((e, i) => {
        const size = Math.round(
            calculateScale(baseSize, spacingScaleFactor, i, spacingFormula),
        );
        const name = `spacing-${100 * (i + 1)}`;
        const value = baseScaleUnit === 'px' ? size : round(size / baseSize, 3);

        const object = {
            [name]: {
                value: `${value}${baseScaleUnit}`,
                type: 'dimension',
            },
        };
        return calculateScale(baseSize, spacingScaleFactor, i, spacingFormula);
    });

    const spacingSizes = smallSizeArray.concat(largeSizeArray);

    const spacingElements = spacingSizes.map((size, i) => {
        return (
            <SpacingElement
                key={`spacing-${size}-${i}`}
                size={size}
                spacerLineHeight={spacerLineHeight}
            />
        );
    });

    return (
        <div className="column">
            <h3>Spacing</h3>
            <div id="spacingWrapper">{spacingElements}</div>
        </div>
    );
};
