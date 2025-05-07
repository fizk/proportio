import React from 'react';
import { useRecoilState } from 'recoil';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import round from '../utilities/round';

interface Props {
    size: number
    spacerLineHeight: number
}

export default function SpacingElement(props: Props) {
    const size = props.size;
    const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState);
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
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
