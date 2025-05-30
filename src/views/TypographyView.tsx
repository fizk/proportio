import React, { useState } from 'react';
import BaseControls from '../components/BaseControls';
import TypeControls from '../components/TypeControls';
import IconControls from '../components/IconControls';
import TypeIconPairingControls from '../components/TypeIconPairingControls';
import Typography from '../components/Typography';
import Iconography from '../components/Iconography';
import TypeIconPairing from '../elements/TypeIconPairing';
import Panel from '../elements/Panel';
import { useBase } from '../context/BaseContext';
import '../styles/tabs.css';
import '../styles/toolbar.css';

export default function TypographyView () {
    const [sampleText, setSampleText] = useState<string>('Proportio');

    const {
        base: {
            baseScaleUnit, baseSize, typeScale, typeScaleFormula, typeSmallQuantity,
            typeLargeQuantity, typeFontWeight, iconPadding, iconScaleFormula,
            iconStroke, icon, textIconGapIndex, textIconIconSizeIndex, textIconGapScaleFormula,
            iconScale, iconSmallQuantity, iconLargeQuantity, spacingScaleFactor, spacingFormula
        },
        setBaseSize, setTypeScale,
        setTypeSmallQuantity, setTypeLargeQuantity, setIconScale, setIconSmallQuantity,
        setIconLargeQuantity, setTypeFontWeight, setIconScaleFormula, setIconStroke,
        setIcon, setTextIconGapIndex, setTextIconIconSizeIndex, setTextIconGapScaleFormula
    } = useBase();

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
                    iconPadding={iconPadding}
                    icon={icon}
                    iconStroke={iconStroke}
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
                    iconPadding={iconPadding}
                    icon={icon}
                    iconStroke={iconStroke}
                />
            </main>
        </div>
    );
};
