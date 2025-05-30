import React from 'react';
import round from '../utilities/round';
import '../styles/typography.css';

interface Props {
    size: number
    content?: string
    showValue?: boolean
    baseScaleUnit: string
    baseSize: number
}

export default function TypeElement({
    size,
    content = 'Ag',
    showValue,
    baseScaleUnit,
    baseSize,
}: Props) {

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
