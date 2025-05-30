import React from 'react';
import TypeElement from './TypeElement';
import IconElement from './IconElement';
import calculateScale from '../utilities/calculateScale';
import round from '../utilities/round';
import '../styles/typography.css';
import '../styles/iconography.css';
import '../styles/typeIconPair.css';

interface Props {
    sampleText: string
    baseSize: number
    spacingScaleFactor: number
    spacingFormula: string
    typeScale: number
    typeSmallQuantity: number
    typeLargeQuantity: number
    typeScaleFormula: string
    textIconGapIndex: number
    textIconIconSizeIndex: number
    textIconGapScaleFormula: string
    iconScale: number
    iconScaleFormula: string
    baseScaleUnit: string
    iconPadding: number
    icon: any
    iconStroke: number
}

export default function TypeIconPairing ({
    sampleText,
    baseSize,
    spacingScaleFactor,
    spacingFormula,
    typeScale,
    typeSmallQuantity,
    typeLargeQuantity,
    typeScaleFormula,
    textIconGapIndex,
    textIconIconSizeIndex,
    textIconGapScaleFormula,
    iconScale,
    iconScaleFormula,
    baseScaleUnit,
    iconPadding,
    icon,
    iconStroke,
}: Props) {

    let smallSizeArray = new Array(typeSmallQuantity).fill(0);
    let largeSizeArray = new Array(typeLargeQuantity).fill(0);

    const demoLineHeight = 1.125;

    const scale =
        textIconGapScaleFormula === 'typeScale'
            ? typeScale
            : textIconGapScaleFormula === 'spacingScale'
                ? spacingScaleFactor
                : 1;
                // : 'none'; //@todo does this work?
    const method =
        textIconGapScaleFormula === 'typeScale'
            ? typeScaleFormula
            : textIconGapScaleFormula === 'spacingScale'
                ? spacingFormula
                : 1;
                // : 'none'; //@todo does this work?

    const smallSizes = smallSizeArray.map((e, i) => {
        const increment = (1 + i) * -1 + textIconGapIndex;

        const iconIncrement = (i + 1) * -1 + textIconIconSizeIndex;
        const gapSize = Math.round(
            calculateScale(baseSize, scale, increment, method),
        );
        // icon size
        const textIncrement = (i + 1) * -1;
        const iconSize = calculateScale(
            baseSize,
            iconScale,
            iconIncrement,
            iconScaleFormula,
        );
        const textSize = Math.round(
            calculateScale(baseSize, typeScale, textIncrement, typeScaleFormula),
        );

        const marginText = `${textSize * demoLineHeight - textSize}px`;
        const marginIcon = `${iconSize * demoLineHeight - iconSize}px`;
        const margin = marginText > marginIcon ? marginText : marginIcon;

        const gapValue =
            baseScaleUnit === 'px' ? gapSize : round(gapSize / baseSize, 3);

        return (
            <div
                className="textIconItem"
                key={`typeIconPair-${iconScale}-neg${i}`}
                style={{
                    marginBottom: margin,
                }}
            >
                <span className="specs">
                    {' '}
                    {gapValue}
                    {baseScaleUnit} (gap){' '}
                </span>
                <div className="typeIconPair" key={`typeIcon-neg${i}`}>
                    <IconElement
                        key={`typeIcon-icon-${iconScale}-neg${i}`}
                        size={iconSize}
                        iconPadding={iconPadding}
                        icon={icon}
                        iconStroke={iconStroke}
                        baseSize={baseSize}
                        baseScaleUnit={baseScaleUnit}
                    />
                    <span
                        style={{
                            display: 'block',
                            margin: 0,
                            padding: 0,
                            width: `${gapSize}px`,
                        }}
                    ></span>
                    <TypeElement
                        key={`typeIcon-text-${typeScale}-neg${i}`}
                        content={sampleText}
                        size={textSize}
                        baseScaleUnit={baseScaleUnit}
                        baseSize={baseSize}
                    />
                </div>
            </div>
        );
    });
    const orderedSmallSizes = smallSizes.reverse();

    const largeSizes = largeSizeArray.map((e, i) => {
        const increment = i + textIconGapIndex;
        const iconIncrement = i + textIconIconSizeIndex;
        const gapSize = Math.round(
            calculateScale(baseSize, scale, increment, method),
        );
        const iconSize = calculateScale(
            baseSize,
            iconScale,
            iconIncrement,
            iconScaleFormula,
        );
        const textSize = Math.round(
            calculateScale(baseSize, typeScale, i, typeScaleFormula),
        );

        const marginText = `${textSize * demoLineHeight - textSize}px`;
        const marginIcon = `${iconSize * demoLineHeight - iconSize}px`;
        const margin = marginText > marginIcon ? marginText : marginIcon;

        const gapValue =
            baseScaleUnit === 'px' ? gapSize : round(gapSize / baseSize, 3);

        return (
            <div
                className="textIconItem"
                key={`typeIconPair-${iconScale}-${i}`}
                style={{
                    marginBottom: margin,
                }}
            >
                <span className="specs">
                    {' '}
                    {gapValue}
                    {baseScaleUnit} (gap){' '}
                </span>
                <div className="typeIconPair" key={`typeIcon-${i}`}>
                    <IconElement
                        key={`typeIcon-icon-${iconScale}-${i}`}
                        size={iconSize}
                        textSize={textSize}
                        iconPadding={iconPadding}
                        icon={icon}
                        iconStroke={iconStroke}
                        baseScaleUnit={baseScaleUnit}
                        baseSize={baseSize}
                    />
                    <span
                        style={{
                            display: 'block',
                            margin: 0,
                            padding: 0,
                            width: `${gapSize}px`,
                        }}
                    ></span>
                    <TypeElement
                        key={`typeIcon-text-${typeScale}-${i}`}
                        content={sampleText}
                        size={textSize}
                        baseScaleUnit={baseScaleUnit}
                        baseSize={baseSize}
                    />
                </div>
            </div>
        );
    });

    return (
        <div className="column">
            <h3>Type-icon pairing</h3>
            <div id="typeIconPairing">
                {orderedSmallSizes}
                {largeSizes}
            </div>
        </div>
    );
};
