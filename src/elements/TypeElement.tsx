import React from 'react';
import { useRecoilState } from 'recoil';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import round from '../utilities/round';
import '../styles/typography.css';

interface Props {
    size: number
    content?: string
    showValue?: boolean
}

export default function TypeElement({
    size,
    content = 'Ag',
    showValue,
}: Props) {
    const [baseScaleUnit] = useRecoilState(baseScaleUnitState);
    const [baseSize] = useRecoilState(baseSizeState);

    const demoLineHeight = 1.125;
    const margin = showValue ? `${size * demoLineHeight - size}px` : '0px';

    const value =
        baseScaleUnit === 'px' ? round(size) : round(size / baseSize, 3);
    const valueElement = showValue ? (
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
            {valueElement}
            <span style={{ fontSize: `${round(size)}px` }}> {content} </span>
        </div>
    );
};
