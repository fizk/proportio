import React, {MouseEvent, useState, useRef, useEffect} from "react";

type Point = [number, number];
type CubicPoint = [number, number, number, number];

interface Props {
    points?: CubicPoint
    onUpdate?: (points: CubicPoint) => void
}

export default function CubicBezier ({points = [0.3, 0.3, 0.6, 0.6], onUpdate = () => {}}: Props) {

    const svgRef = useRef<SVGSVGElement |  null>(null);
    const width = 300;
    const height = 300;
    const pointRadius = 14;
    const pointBorder = 2;
    const pointBegin = [0, height];
    const pointEnd = [width, 0];

    const [point1, setPoint1] = useState<Point>([
        points[0] * width,
        height-(points[1] * height)
    ]);
    const [point2, setPoint2] = useState<Point>([
        points[2] * width,
        height-(points[3] * height)
    ]);

    useEffect(() => {
        setPoint1([
            points[0] * width,
            height-(points[1] * height)
        ]);
        setPoint2([
            points[2] * width,
                height-(points[3] * height)
        ])

    }, [points]);

    const [offset, setOffset] = useState([0, 0]);
    const [dragPoint, setDragPoint] = useState<string | null>(null);

    const normalisePoint = (point: Point, width: number, height: number): Point => {
        return [
            parseFloat((point[0] / width).toFixed(2)),
            parseFloat(((height - point[1]) / height).toFixed(2)),
        ];
    }

    const handleMouseDown = (event: MouseEvent<SVGSVGElement>) => {
        const point = (event.nativeEvent.target as SVGElement).dataset.point
        if (point !== undefined) {
            const CTM = svgRef?.current?.getScreenCTM();
            const position = [
                (event.clientX - (CTM?.e || 0)) / (CTM?.a || 0),
                (event.clientY - (CTM?.f || 0)) / (CTM?.d || 0)
            ];

            switch(point) {
                case 'point1': {
                    setDragPoint(point);
                    setOffset([
                        position[0] - point1[0],
                        position[1] - point1[1],
                    ]);

                }; break;
                case 'point2': {
                    setDragPoint(point);
                    setOffset([
                        position[0] - point2[0],
                        position[1] - point2[1],
                    ]);
                }; break;
                default: break;
            }
        }
    }

    const handleMouseMove = (event: MouseEvent<SVGSVGElement>) => {
        if (!dragPoint) { return; }

        event.preventDefault();
        const CTM = svgRef?.current?.getScreenCTM();
        const position = [
            (event.clientX - (CTM?.e || 0)) / (CTM?.a || 0),
            (event.clientY - (CTM?.f || 0)) / (CTM?.d || 0)
        ]
        const point: Point = [
            position[0] - offset[0],
            position[1] - offset[1]
        ];

        if (point[0] < 0) { return; }
        if (point[0] > width) { return; }

        switch(dragPoint) {
            case 'point1': {
                setPoint1(point);
                onUpdate([
                    ...normalisePoint(point, width, height),
                    ...normalisePoint(point2, width, height),
                ]);
            }; break;
            case 'point2': {
                setPoint2(point);
                onUpdate([
                    ...normalisePoint(point1, width, height),
                    ...normalisePoint(point, width, height),
                ]);
            }; break;
            default: break;
        }
    }

    const handleMouseUp = () => {
        setDragPoint(null);
    }

    return (
        <svg
            width={width + (pointRadius*2) + (pointBorder*2)}
            height={height * 2}
            viewBox={`0 0 ${width + (pointRadius*2) + (pointBorder*2)} ${height * 2}`}
            ref={svgRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <g transform={`translate(${pointRadius + pointBorder} ${height / 2})`}>
                <rect
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    fill="#f0f8ff"
                />
                <line stroke="#d3d3d3" fill="none"
                    strokeWidth={3}
                    x1={pointBegin.at(0)} y1={pointBegin.at(1)}
                    x2={pointEnd.at(0)} y2={pointEnd.at(1)}
                />
                <path
                    d={`M0,${height} C${point1.at(0)},${point1.at(1)} ${point2.at(0)},${point2.at(1)} ${width},0`}
                    stroke="black"
                    fill="none"
                    strokeWidth={4}
                />
                <g>
                    <line
                        x1={point1.at(0)}
                        y1={point1.at(1)}
                        x2={pointBegin.at(0)}
                        y2={pointBegin.at(1)}
                        stroke="black"
                    />
                    <circle name="point1"
                        data-point="point1"
                        cx={point1.at(0)}
                        cy={point1.at(1)}
                        fill="pink"
                        stroke="black"
                        strokeWidth={pointBorder}
                        r={pointRadius}
                    />
                </g>

                <g>
                    <line
                        x1={point2.at(0)}
                        y1={point2.at(1)}
                        x2={pointEnd.at(0)}
                        y2={pointEnd.at(1)}
                        stroke="black"
                    />
                    <circle name="point2"
                        data-point="point2"
                        cx={point2.at(0)}
                        cy={point2.at(1)}
                        fill="pink"
                        stroke="black"
                        strokeWidth={pointBorder}
                        r={pointRadius}
                    />
                </g>
            </g>
        </svg>
    )
}
