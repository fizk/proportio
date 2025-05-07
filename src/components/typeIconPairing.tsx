import React from 'react';
import { useRecoilState } from 'recoil';
import TypeElement from './TypeElement';
import IconElement from './IconElement';
import calculateScale from '../utilities/calculateScale';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import {
    spacingScaleFactorState,
    spacingFormulaState,
} from '../states/spacing';
import {
    typeScaleState,
    typeSmallQuantityState,
    typeLargeQuantityState,
    typeScaleFormulaState,
} from '../states/typography';
import {
    textIconGapIndexState,
    textIconIconSizeIndexState,
    textIconGapScaleFormulaState,
} from '../states/textIconPair';
import {
    iconScaleState,
    iconScaleFormulaState,
} from '../states/iconography';
import round from '../utilities/round';

import '../styles/typography.css';
import '../styles/iconography.css';
import '../styles/typeIconPair.css';
import { ScaleFormulaType } from '../utilities/scaleFormulas';

interface Props {
    sampleText: string
}

export default function TypeIconPairing (props: Props) {
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(spacingScaleFactorState,);
    const [spacingFormula, setSpacingFormula] =useRecoilState(spacingFormulaState);

    const [typeScale, setTypeScale] = useRecoilState(typeScaleState);
    const [typeSmallQuantity, setTypeSmallQuantity] = useRecoilState(typeSmallQuantityState,);
    const [typeLargeQuantity, setTypeLargeQuantity] = useRecoilState(typeLargeQuantityState,);
    const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(typeScaleFormulaState,);

    const [textIconGapIndex, setTextIconGapIndex] = useRecoilState(textIconGapIndexState,);
    const [textIconIconSizeIndex, setTextIconIconSizeIndex] = useRecoilState(textIconIconSizeIndexState,);
    const [textIconGapScaleFormula, setTextIconGapScaleFormula] = useRecoilState(textIconGapScaleFormulaState,);

    const [iconScale, setIconScale] = useRecoilState(iconScaleState);
    const [iconScaleFormula, setIconScaleFormula] = useRecoilState(iconScaleFormulaState,);
    const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState);

    let smallSizeArray = new Array(typeSmallQuantity).fill(0);
    let largeSizeArray = new Array(typeLargeQuantity).fill(0);

    const demoLineHeight = 1.125;

    const sampleText = props.sampleText;

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
                        i={(iconIncrement + 1) * -1}
                        size={iconSize}
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
                        i={(i + 1) * -1}
                        content={sampleText}
                        size={textSize}
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
                        i={iconIncrement}
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
                        baseSize={baseSize}
                        scale={typeScale}
                        i={i}
                        content={sampleText}
                        scaleMethod={typeScaleFormula as ScaleFormulaType}
                        size={textSize}
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
