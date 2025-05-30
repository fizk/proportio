import React from 'react';
import createSvgIcon from '../utilities/createSvgIcon';
import round from '../utilities/round';
import { FeatherIconNames } from 'feather-icons';

interface Props {
    size: number
    showValue?: boolean
    textSize?: number
    baseSize: number
    baseScaleUnit: string
    iconPadding: number
    icon: any
    iconStroke: number
}

export default function IconElement ({
    size,
    showValue = true,
    textSize = 16,
    baseSize,
    baseScaleUnit,
    iconPadding,
    icon,
    iconStroke,
}: Props) {

    const roundedSize = round(size);

    /* Just to align icon examples with typography */
    const iconLineHeight = 1.35;
    const textLineHeight = 1.25;

    const value = baseScaleUnit === 'px' ? roundedSize : round(roundedSize / baseSize, 3);

    const showValueElement = showValue ? (
        <span className="specs">
            {' '}
            {value}
            {baseScaleUnit}{' '}
        </span>
    ) : (
        ''
    );
    const margin = showValue ? `${roundedSize * iconLineHeight - roundedSize}px` : '0px';
    const minHeight = textSize ? textSize * textLineHeight : roundedSize;

    return (
        <div
            className="iconItem"
            style={{
                marginBottom: margin,
            }}
        >
            {showValueElement}
            <div
                className="icon"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    minHeight: `${minHeight}px`,
                }}
            >
                {createSvgIcon(size, size, iconPadding, `${icon}` as FeatherIconNames, iconStroke)}
            </div>
        </div>
    );
};
