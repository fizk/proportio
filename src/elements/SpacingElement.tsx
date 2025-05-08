import React from 'react';
import { useRecoilState } from 'recoil';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import round from '../utilities/round';

interface Props {
    size: number
}

export default function SpacingElement({size}: Props) {
    const [baseScaleUnit] = useRecoilState(baseScaleUnitState);
    const [baseSize] = useRecoilState(baseSizeState);
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
