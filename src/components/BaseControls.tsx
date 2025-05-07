import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { baseSizeState } from '../states/base';
import {
    typeScaleFormulaState,
    typeScaleState,
    typeSmallQuantityState,
    typeLargeQuantityState,
} from '../states/typography';
import Dropdown from 'react-dropdown';
import typeScaleOptions from '../utilities/typeScaleOptions';
import {
    iconLargeQuantityState,
    iconScaleState,
    iconSmallQuantityState,
} from '../states/iconography';

export default function BaseControls () {

    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    const [typeScale, setTypeScale] = useRecoilState(typeScaleState);
    const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(typeScaleFormulaState,);
    const [typeSmallQuantity, setTypeSmallQuantity] = useRecoilState(typeSmallQuantityState,);
    const [typeLargeQuantity, setTypeLargeQuantity] = useRecoilState(typeLargeQuantityState,);
    const [iconScale, setIconScale] = useRecoilState(iconScaleState);
    const [iconSmallQuantity, setIconSmallQuantity] = useRecoilState(iconSmallQuantityState,);
    const [iconLargeQuantity, setIconLargeQuantity] = useRecoilState(iconLargeQuantityState,);

    const [scaleInput, setScaleInput] = useState(typeScale);

    return (
        <fieldset>
            <legend>Common values</legend>
            <div className="column">
                <div className="formGroup">
                    <label htmlFor="baseSize">Base size (px)</label>
                    <input
                        id="baseSize"
                        type="number"
                        onInput={(event: MouseEvent<HTMLInputElement>) => {
                            setBaseSize(Number(event.currentTarget.value));
                        }}
                        step="1"
                        min="0"
                        defaultValue={baseSize}
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="baseScale">Scale</label>

                    <Dropdown
                        //@ts-ignore
                        options={typeScaleOptions as unknown as string}
                        onChange={(e) => {
                            if (e.value === 'Custom') {
                                // do nothing
                            } else {
                                //@ts-ignore
                                setScaleInput(e.value);
                                //@ts-ignore
                                if (e.value !== typeScale) {
                                    setTypeScale(Number(e.value));
                                    setIconScale(Number(e.value));
                                }
                            }
                        }}
                        //@ts-ignore
                        value={
                            !typeScaleOptions.filter((item) => item.value === typeScale)[0]
                            ? typeScaleOptions.filter((item) => item.value === undefined)[0]
                            : typeScaleOptions.filter((item) => item.value === typeScale)[0]
                        }
                        //@ts-ignore
                        placeholder={typeScaleOptions[1].value}
                    />

                    <input
                        id="baseScale"
                        key={scaleInput}
                        type="number"
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            setTypeScale(Number(event.currentTarget.value));
                            setIconScale(Number(event.currentTarget.value));
                        }}
                        step={typeScaleFormula === 'power' ? '0.001' : '1'}
                        min="0"
                        defaultValue={scaleInput}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="smallSizes">Small sizes</label>
                    <input
                        id="smallSizes"
                        type="number"
                        onInput={(event: FormEvent<HTMLInputElement>) => {
                            setTypeSmallQuantity(Number(event.currentTarget.value));
                            setIconSmallQuantity(Number(event.currentTarget.value));
                        }}
                        step="1"
                        min="0"
                        defaultValue={typeSmallQuantity}
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="largeSizes">Large sizes</label>
                    <input
                        id="largeSizes"
                        type="number"
                        onInput={(event: FormEvent<HTMLInputElement>) => {
                            setTypeLargeQuantity(Number(event.currentTarget.value));
                            setIconLargeQuantity(Number(event.currentTarget.value));
                        }}
                        step="1"
                        min="0"
                        defaultValue={typeLargeQuantity}
                    />
                </div>
            </div>
        </fieldset>
    );
};
