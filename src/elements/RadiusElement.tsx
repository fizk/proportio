import React from 'react';
import round from '../utilities/round';

interface Props {
    radius: number
    baseSize: number
    baseScaleUnit: string
}

export default function RadiusElement({
    radius,
    baseSize,
    baseScaleUnit,
}: Props) {
    const value =
        baseScaleUnit === 'px' ? round(radius) : round(radius / baseSize, 3);

    return (
        <div className="radiusItem">
            <span className="specs">
                {' '}
                {value}
                {baseScaleUnit}{' '}
            </span>
            <div
                className="radius"
                style={{ borderTopLeftRadius: `${radius}px` }}
            ></div>
        </div>
    );
};
