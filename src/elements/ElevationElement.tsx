import React from 'react';
import round from '../utilities/round';

interface Props {
    elevation: number
    offsetY: number
    baseScaleUnit: string
    baseSize: number
}

export default function ElevationElement({
    elevation,
    offsetY,
    baseScaleUnit,
    baseSize
}: Props) {

    const value =
        baseScaleUnit === 'px' ? round(elevation) : round(elevation / baseSize, 3);
    const offsetValue =
        baseScaleUnit === 'px' ? round(offsetY) : round(offsetY / baseSize, 3);

    const margin = elevation > 0 ? elevation : 4;
    return (
        <div className="elevationItem">
            <span className="specs">
                Blur: {value}
                {baseScaleUnit}
                <br />
                Distance: {offsetValue}
                {baseScaleUnit}
            </span>
            <div
                className="elevation"
                style={{
                    boxShadow: `0 ${offsetY}px ${elevation}px var(--elevationDemoShadowColor)`,
                    marginBottom: `${margin}px`,
                }}
            ></div>
        </div>
    );
};
