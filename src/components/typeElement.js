import React from 'react';
import { useRecoilState } from 'recoil';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import round from '../utilities/round';
import '../styles/typography.css';

export default function TypeElement(props) {
    const size = props.size;
    const content = props.content ? props.content : 'Ag';
    const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState);
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);

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
