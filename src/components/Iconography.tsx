import React from 'react';
import IconElement from '../elements/IconElement';
import calculateScale from '../utilities/calculateScale';
import round from '../utilities/round';
import '../styles/iconography.css';

interface Props {
    baseSize: number
    iconScale: number
    iconSmallQuantity: number
    iconLargeQuantity: number
    iconScaleFormula: string
    baseScaleUnit: string
}

export default function Iconography({
    baseSize,
    iconScale,
    iconSmallQuantity,
    iconLargeQuantity,
    iconScaleFormula,
    baseScaleUnit,
}: Props) {

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
            <IconElement key={`${iconScale}-${i}`} size={size} showValue />
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
