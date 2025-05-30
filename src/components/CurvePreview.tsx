import React from "react";

interface Props {
    cubicPoints: [number, number, number, number]
}

export default function CurvePreview ({cubicPoints}: Props) {

    const width = 50;
    const height = 50;
    const padding = 5;

    const points = [
        [0, height],
        [
            cubicPoints[0]*width,
            height - (cubicPoints[1]*height),
        ],
        [
            cubicPoints[2]*width,
            height - (cubicPoints[3]*height),
        ],
        [height, 0],
    ];


    return (
        <svg className="cubic-preview" width={width + (padding * 2)} height={height + (padding * 2)} viewBox={`0 0 ${width + (padding * 2)} ${height + (padding * 2)}`}>
            <g transform={`translate(${padding}, ${padding})`}>
                <rect className="cubic-preview__background"
                    x={0}
                    y={0}
                    height={height}
                    width={width}
                    // rx={10}
                />
                <path className="cubic-preview__path"
                    d={`M${points[0][0]},${points[0][1]} C${points[1][0]},${points[1][1]} ${points[2][0]},${points[2][1]} ${points[3][0]},${points[3][1]}`}
                />
            </g>
        </svg>
    )
}
