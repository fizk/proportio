import React from 'react';
import TypeElement from './TypeElement';
import { useRecoilState } from 'recoil';
import {
    typeScaleState,
    typeSmallQuantityState,
    typeLargeQuantityState,
    typeScaleFormulaState,
} from '../states/typography';
import calculateScale from '../utilities/calculateScale';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import round from '../utilities/round';
import '../styles/typography.css';

interface Props {
    sampleText: string
}

export default function Typography (props: Props) {
    const [baseSize] = useRecoilState(baseSizeState);
    const [typeScale] = useRecoilState(typeScaleState);
    const [typeSmallQuantity] = useRecoilState(typeSmallQuantityState,);
    const [typeLargeQuantity] = useRecoilState(typeLargeQuantityState,);
    const [typeScaleFormula] = useRecoilState(typeScaleFormulaState,);
    const [baseScaleUnit] = useRecoilState(baseScaleUnitState);

    const sampleText = props.sampleText;

    let smallSizeArray = new Array(typeSmallQuantity).fill(0);
    let largeSizeArray = new Array(typeLargeQuantity).fill(0);

    const smallSizes = smallSizeArray.map((e, i) => {
        const increment = (i + 1) * -1;
        const size = Math.round(
            calculateScale(baseSize, typeScale, increment, typeScaleFormula),
        );
        const name = `text-size-${100 + increment * 10}`;
        const value = baseScaleUnit === 'px' ? size : round(size / baseSize, 3);

        return (
            <TypeElement
                key={`${typeScale}-neg${i}`}
                size={size}
                content={sampleText}
                showValue
            />
        );
    });
    const orderedSmallSizes = smallSizes.reverse();

    const largeSizes = largeSizeArray.map((e, i) => {
        const size = Math.round(
            calculateScale(baseSize, typeScale, i, typeScaleFormula),
        );
        const name = `text-size-${100 * (i + 1)}`;
        const value = baseScaleUnit === 'px' ? size : round(size / baseSize, 3);

        return (
            <TypeElement
                key={`${typeScale}-${i}`}
                size={size}
                content={sampleText}
                showValue
            />
        );
    });

    return (
        <div className="column">
            <h3>Typography</h3>
            <div id="typography">
                {orderedSmallSizes}
                {largeSizes}
            </div>
        </div>
    );
};
