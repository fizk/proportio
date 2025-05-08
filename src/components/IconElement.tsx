import React from 'react';
import { useRecoilState } from 'recoil';
import createSvgIcon from '../utilities/createSvgIcon';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import {
    iconPaddingState,
    iconState,
    iconStrokeState,
} from '../states/iconography';
import round from '../utilities/round';

interface Props {
    size: number
    showValue?: boolean
    textSize?: number
}

export default function IconElement (props: Props) {
    const [baseSize] = useRecoilState(baseSizeState);
    const [iconPadding] = useRecoilState(iconPaddingState);
    const [icon] = useRecoilState(iconState);
    const [iconStroke] = useRecoilState(iconStrokeState);
    const [baseScaleUnit] = useRecoilState(baseScaleUnitState);

    const size = round(props.size);

    /* Just to align icon examples with typography */
    const iconLineHeight = 1.35;
    const textLineHeight = 1.25;

    const value = baseScaleUnit === 'px' ? size : round(size / baseSize, 3);

    const showValue = props.showValue ? (
        <span className="specs">
            {' '}
            {value}
            {baseScaleUnit}{' '}
        </span>
    ) : (
        ''
    );
    const margin = props.showValue ? `${size * iconLineHeight - size}px` : '0px';
    const minHeight = props.textSize ? props.textSize * textLineHeight : size;

    return (
        <div
            className="iconItem"
            style={{
                marginBottom: margin,
            }}
        >
            {showValue}
            <div
                className="icon"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    minHeight: `${minHeight}px`,
                }}
            >
                {createSvgIcon(size, size, iconPadding, `${icon}`, iconStroke)}
            </div>
        </div>
    );
};
