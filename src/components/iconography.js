import React from 'react';
import { useRecoilState } from 'recoil';
import IconElement from './IconElement';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import {
    iconScaleState,
    iconSmallQuantityState,
    iconLargeQuantityState,
    iconScaleFormulaState,
    iconPaddingState,
} from '../states/iconography';
import calculateScale from '../utilities/calculateScale';
import round from '../utilities/round';
import '../styles/iconography.css';

export default function Iconography() {
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    const [iconScale, setIconScale] = useRecoilState(iconScaleState);
    const [iconSmallQuantity, setIconSmallQuantity] = useRecoilState(iconSmallQuantityState,);
    const [iconLargeQuantity, setIconLargeQuantity] = useRecoilState(iconLargeQuantityState,);
    const [iconScaleFormula, setIconScaleFormula] = useRecoilState(iconScaleFormulaState,);
    const [iconPadding, setIconPadding] = useRecoilState(iconPaddingState);
    const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState);

    let smallSizeArray = new Array(iconSmallQuantity).fill(0);
    let largeSizeArray = new Array(iconLargeQuantity).fill(0);

    const smallSizes = smallSizeArray.map((e, i) => {
        const increment = (i + 1) * -1;
        const size = Math.round(
            calculateScale(baseSize, iconScale, increment, iconScaleFormula),
        );
        const name = `icon-size-${100 + increment * 10}`;
        const value = baseScaleUnit === 'px' ? size : round(size / baseSize, 3);

        return (
            <IconElement
                key={`${iconScale}-neg${i}`}
                i={increment}
                size={size}
                showValue
            />
        );
    });
    const orderedSmallSizes = smallSizes.reverse();

    const largeSizes = largeSizeArray.map((e, i) => {
        const size = Math.round(
            calculateScale(baseSize, iconScale, i, iconScaleFormula),
        );
        const name = `icon-size-${100 * (i + 1)}`;
        const value = baseScaleUnit === 'px' ? size : round(size / baseSize, 3);

        return (
            <IconElement key={`${iconScale}-${i}`} i={i} size={size} showValue />
        );
    });

    return (
        <div className="column">
            <h3>Iconography</h3>
            <div id="iconography">
                {orderedSmallSizes}
                {largeSizes}
            </div>
        </div>
    );
};
