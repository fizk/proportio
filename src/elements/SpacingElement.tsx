import React from 'react';
import round from '../utilities/round';

interface Props {
    size: number
    baseScaleUnit: string
    baseSize: number
}

export default function SpacingElement({
    size,
    baseScaleUnit,
    baseSize,
}: Props) {
    const value =
        baseScaleUnit === 'px' ? round(size) : round(size / baseSize, 3);

    return (
        <div className="spacingItem">
            <span className="specs">
                {' '}
                {value}
                {baseScaleUnit}{' '}
            </span>
            <div
                className="spacing"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                }}
            ></div>
        </div>
    );
};
