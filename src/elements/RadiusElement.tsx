import React from 'react';
import { useRecoilState } from 'recoil';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import round from '../utilities/round';

interface Props {
    radius: number
}

export default function RadiusElement({radius}: Props) {
    const [baseScaleUnit] = useRecoilState(baseScaleUnitState);
    const [baseSize] = useRecoilState(baseSizeState);
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
