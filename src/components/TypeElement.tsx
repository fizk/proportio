import React from 'react';
import { useRecoilState } from 'recoil';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import round from '../utilities/round';
import '../styles/typography.css';
import { type ScaleFormulaType } from '../utilities/scaleFormulas';

interface Props {
    size: number
    scale?: number
    i?: number
    content: string
    showValue?: boolean
}

export default function TypeElement(props: Props) {
    const [baseScaleUnit] = useRecoilState(baseScaleUnitState);
    const [baseSize] = useRecoilState(baseSizeState);

    const size = props.size;
    const content = props.content ? props.content : 'Ag';

    const demoLineHeight = 1.125;
    const margin = props.showValue ? `${size * demoLineHeight - size}px` : '0px';

    const value =
        baseScaleUnit === 'px' ? round(size) : round(size / baseSize, 3);
    const showValue = props.showValue ? (
        <span className="specs"> {`${value}${baseScaleUnit}`} </span>
    ) : (
        ''
    );

    return (
        <div
            className="typeItem"
            style={{
                marginBottom: margin,
            }}
        >
            {showValue}
            <span style={{ fontSize: `${round(size)}px` }}> {content} </span>
        </div>
    );
};
