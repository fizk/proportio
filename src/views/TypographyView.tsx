import React, { useState } from 'react';
import BaseControls from '../components/BaseControls';
import TypeControls from '../components/TypeControls';
import IconControls from '../components/IconControls';
import TypeIconPairingControls from '../components/TypeIconPairingControls';
import Typography from '../components/Typography';
import Iconography from '../components/Iconography';
import TypeIconPairing from '../elements/TypeIconPairing';
import Panel from '../elements/Panel';
import { useRecoilState } from 'recoil';
import { baseSizeState, baseScaleUnitState } from '../states/base';
import {
    typeScaleFormulaState,
    typeScaleState,
    typeSmallQuantityState,
    typeLargeQuantityState,
} from '../states/typography';
import {
    iconLargeQuantityState,
    iconScaleState,
    iconSmallQuantityState,
} from '../states/iconography';
import {
    iconScaleFormulaState,
    iconState,
    iconStrokeState,
} from '../states/iconography';
import {  } from '../states/base';
import {
    textIconGapIndexState,
    textIconIconSizeIndexState,
    textIconGapScaleFormulaState,
} from '../states/textIconPair';
import {
    spacingScaleFactorState,
    spacingFormulaState,
} from '../states/spacing';
import { typeFontWeightState } from '../states/typography';
import '../styles/tabs.css';
import '../styles/toolbar.css';

export default function TypographyView () {
    const [sampleText, setSampleText] = useState<string>('Proportio');

    const [baseScaleUnit] = useRecoilState(baseScaleUnitState);
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    const [typeScale, setTypeScale] = useRecoilState(typeScaleState);
    const [typeScaleFormula] = useRecoilState(typeScaleFormulaState,);
    const [typeSmallQuantity, setTypeSmallQuantity] = useRecoilState(typeSmallQuantityState,);
    const [typeLargeQuantity, setTypeLargeQuantity] = useRecoilState(typeLargeQuantityState,);
    const [_, setIconScale] = useRecoilState(iconScaleState);
    const [__, setIconSmallQuantity] = useRecoilState(iconSmallQuantityState,);
    const [___, setIconLargeQuantity] = useRecoilState(iconLargeQuantityState,);

    const [typeFontWeight, setTypeFontWeight] = useRecoilState(typeFontWeightState);

    const [iconScaleFormula, setIconScaleFormula] = useRecoilState(iconScaleFormulaState,);
    const [iconStroke, setIconStroke] = useRecoilState(iconStrokeState);
    const [icon, setIcon] = useRecoilState(iconState);

    const [textIconGapIndex, setTextIconGapIndex] = useRecoilState(textIconGapIndexState,);
    const [textIconIconSizeIndex, setTextIconIconSizeIndex] = useRecoilState(textIconIconSizeIndexState,);
    const [textIconGapScaleFormula, setTextIconGapScaleFormula] = useRecoilState(textIconGapScaleFormulaState,);

    const [iconScale] = useRecoilState(iconScaleState);
    const [iconSmallQuantity] = useRecoilState(iconSmallQuantityState,);
    const [iconLargeQuantity] = useRecoilState(iconLargeQuantityState,);

    const [spacingScaleFactor] = useRecoilState(spacingScaleFactorState,);
    const [spacingFormula] =useRecoilState(spacingFormulaState);

    return (
        <div className="splitView">
            <Panel direction="column">
                <BaseControls
                    baseSize={baseSize}
                    setBaseSize={setBaseSize}
                    typeScale={typeScale}
                    setTypeScale={setTypeScale}
                    typeScaleFormula={typeScaleFormula}
                    typeSmallQuantity={typeSmallQuantity}
                    setTypeSmallQuantity={setTypeSmallQuantity}
                    typeLargeQuantity={typeLargeQuantity}
                    setTypeLargeQuantity={setTypeLargeQuantity}
                    setIconScale={setIconScale}
                    setIconSmallQuantity={setIconSmallQuantity}
                    setIconLargeQuantity={setIconLargeQuantity}
                />
                <TypeControls
                    sampleText={sampleText}
                    setSampleText={setSampleText}
                    typeFontWeight={typeFontWeight}
                    setTypeFontWeight={setTypeFontWeight}
                />
                <IconControls
                    iconScaleFormula={iconScaleFormula}
                    setIconScaleFormula={setIconScaleFormula}
                    iconStroke={iconStroke}
                    setIconStroke={setIconStroke}
                    icon={icon}
                    setIcon={setIcon}
                />
                <TypeIconPairingControls
                    textIconGapIndex={textIconGapIndex}
                    setTextIconGapIndex={setTextIconGapIndex}
                    textIconIconSizeIndex={textIconIconSizeIndex}
                    setTextIconIconSizeIndex={setTextIconIconSizeIndex}
                    textIconGapScaleFormula={textIconGapScaleFormula}
                    setTextIconGapScaleFormula={setTextIconGapScaleFormula}
                />
            </Panel>
            <main className="demoRow apply-font-main">
                <Typography
                    sampleText={sampleText}
                    baseSize={baseSize}
                    typeScale={typeScale}
                    typeSmallQuantity={typeSmallQuantity}
                    typeLargeQuantity={typeLargeQuantity}
                    typeScaleFormula={typeScaleFormula}
                    baseScaleUnit={baseScaleUnit}
                />
                <Iconography
                    baseSize={baseSize}
                    iconScale={iconScale}
                    iconSmallQuantity={iconSmallQuantity}
                    iconLargeQuantity={iconLargeQuantity}
                    iconScaleFormula={iconScaleFormula}
                    baseScaleUnit={baseScaleUnit}
                />
                <TypeIconPairing
                    sampleText={sampleText}
                    baseSize={baseSize}
                    spacingScaleFactor={spacingScaleFactor}
                    spacingFormula={spacingFormula}
                    typeScale={typeScale}
                    typeSmallQuantity={typeSmallQuantity}
                    typeLargeQuantity={typeLargeQuantity}
                    typeScaleFormula={typeScaleFormula}
                    textIconGapIndex={textIconGapIndex}
                    textIconIconSizeIndex={textIconIconSizeIndex}
                    textIconGapScaleFormula={textIconGapScaleFormula}
                    iconScale={iconScale}
                    iconScaleFormula={iconScaleFormula}
                    baseScaleUnit={baseScaleUnit}
                />
            </main>
        </div>
    );
};
