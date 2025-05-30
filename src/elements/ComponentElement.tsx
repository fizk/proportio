import React from 'react';
import createSvgIcon from '../utilities/createSvgIcon';
import round from '../utilities/round';
import '../styles/component.css';

interface Props {
    componentMinHeight: number
    paddingX: number
    paddingY: number
    typeSize: number
    iconSize: number
    gapSize: number
    spec: boolean
    iconPadding: number
    componentLineHeight: number
    showComponentIcon: boolean
    showComponentText: boolean
    radius: number
    icon: any
    iconStroke: number
    baseScaleUnit: string
    baseSize: number
}

const ComponentElement = ({
    componentMinHeight,
    paddingX,
    paddingY,
    typeSize,
    iconSize,
    gapSize,
    spec,
    iconPadding,
    componentLineHeight,
    showComponentIcon,
    showComponentText,
    radius,
    icon,
    iconStroke,
    baseScaleUnit,
    baseSize,
}: Props) => {

    const computedHeight = paddingY * 2 + Number(componentLineHeight) * typeSize;

    const componentLabel = showComponentText ? (
        <div className={spec ? 'componentTextSpec' : 'componentText'}>
            {' '}
            Component label{' '}
        </div>
    ) : (
        ''
    );
    const componentIcon = showComponentIcon ? (
        <div className={spec ? 'componentIconSpec' : 'componentIcon'}>
            {createSvgIcon(iconSize, iconSize, iconPadding, icon, iconStroke)}
        </div>
    ) : (
        ''
    );
    const componentGap =
        showComponentIcon && showComponentText ? (
            <div
                className={spec ? 'paddingUnit textIconGap' : 'textIconGap'}
                style={{
                    width: `${gapSize}px`,
                    height: `${gapSize / 2}px`,
                }}
            ></div>
        ) : (
            ''
        );
    const padTopClass = showComponentText ? 'padTop' : 'padTopAlt';
    const padBottomClass = showComponentText ? 'padBottom' : 'padBottomAlt';
    const gapSpecAnnotation =
        !showComponentIcon || !showComponentText ? (
            ''
        ) : (
            <div
                className="specGap specs"
                style={{ marginLeft: `${Math.round(paddingX)}px` }}
            >
                {`Gap: ${baseScaleUnit === 'px' ? round(gapSize) : round(gapSize / baseSize, 3)
                    }${baseScaleUnit}`}
            </div>
        );

    const biggestHeight =
        computedHeight > componentMinHeight ? computedHeight : componentMinHeight;
    const calculatedRadius =
        radius > biggestHeight / 2 ? biggestHeight / 2 : radius;

    const specAnnotations = (
        <>
            <div className="specHeight specs">
                {' '}
                {`Height: ${baseScaleUnit === 'px'
                        ? round(computedHeight)
                        : round(computedHeight / baseSize, 3)
                    }${baseScaleUnit}
        \n (Min: ${baseScaleUnit === 'px'
                        ? round(componentMinHeight)
                        : round(componentMinHeight / baseSize, 3)
                    }${baseScaleUnit})`}{' '}
            </div>
            <div className="specType specs">
                {' '}
                {`Font: ${baseScaleUnit === 'px'
                        ? round(typeSize)
                        : round(typeSize / baseSize, 3)
                    }${baseScaleUnit}`}{' '}
            </div>
            <div
                className="specIcon specs"
                style={{
                    marginLeft: `${Math.round(paddingX)}px`,
                }}
            >
                {`Icon: ${baseScaleUnit === 'px'
                        ? round(iconSize)
                        : round(iconSize / baseSize, 3)
                    }${baseScaleUnit}`}
            </div>
            <div className="specPaddingX specs">
                {' '}
                {`Pad-X: ${baseScaleUnit === 'px'
                        ? round(paddingX)
                        : round(paddingX / baseSize, 3)
                    }${baseScaleUnit}`}{' '}
            </div>
            <div className="specPaddingY specs">
                {' '}
                {`Pad-Y: ${baseScaleUnit === 'px'
                        ? round(paddingY)
                        : round(paddingY / baseSize, 3)
                    }${baseScaleUnit}`}{' '}
            </div>
            {gapSpecAnnotation}
            <div className="specRadius specs">
                {' '}
                {`R: ${baseScaleUnit === 'px' ? round(radius) : round(radius / baseSize, 3)
                    }${baseScaleUnit}`}{' '}
            </div>
        </>
    );
    const showSpecs = spec ? specAnnotations : '';

    const paddingElementFixedSize = '10';

    return (
        <div className={spec ? 'componentSpecWrapper' : 'componentWrapper'}>
            <div className={spec ? 'componentSpecItemWrapper' : ''}>
                <div
                    style={{
                        minWidth: `${componentMinHeight}px`,
                        minHeight: `${componentMinHeight}px`,
                        fontSize: `${typeSize}px`,
                        lineHeight: `${componentLineHeight}`,
                        borderRadius: `${calculatedRadius}px`,
                    }}
                    className="component"
                >
                    <div
                        className={spec ? `paddingUnit ${padTopClass}` : `${padTopClass}`}
                        style={{
                            height: `${paddingY}px`,
                            width: `${paddingElementFixedSize}px`,
                        }}
                    ></div>
                    <div
                        className={
                            spec ? `paddingUnit ${padBottomClass}` : ` ${padBottomClass}`
                        }
                        style={{
                            height: `${paddingY}px`,
                            width: `${paddingElementFixedSize}px`,
                        }}
                    ></div>
                    <div
                        className={spec ? 'paddingUnit padLeft' : 'padLeft'}
                        style={{
                            height: `${paddingElementFixedSize}px`,
                            width: `${paddingX}px`,
                        }}
                    ></div>
                    <div
                        className={spec ? 'paddingUnit padRight' : 'padRight'}
                        style={{
                            height: `${paddingElementFixedSize}px`,
                            width: `${paddingX}px`,
                        }}
                    ></div>
                    <div
                        className={spec ? 'paddingUnit compRadius' : 'compRadius'}
                        style={{
                            height: `${calculatedRadius * 2}px`,
                            width: `${calculatedRadius * 2}px`,
                            borderRadius: `${calculatedRadius}px`,
                        }}
                    ></div>

                    {componentIcon}
                    {componentGap}
                    {componentLabel}
                </div>
            </div>
            {showSpecs}
        </div>
    );
};

export default ComponentElement;
