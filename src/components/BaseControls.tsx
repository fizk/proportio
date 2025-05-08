import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import Dropdown from 'react-dropdown';
import typeScaleOptions from '../utilities/typeScaleOptions';

interface Props {
    baseSize: number
    setBaseSize: (value: number) => void
    typeScale: number
    setTypeScale: (value: number) => void
    typeScaleFormula: string
    typeSmallQuantity: number
    setTypeSmallQuantity: (value: number) => void
    typeLargeQuantity: number
    setTypeLargeQuantity: (value: number) => void
    setIconScale: (value: number) => void
    setIconSmallQuantity: (value: number) => void
    setIconLargeQuantity: (value: number) => void
}

export default function BaseControls ({
    baseSize,
    setBaseSize,
    typeScale,
    setTypeScale,
    typeScaleFormula,
    typeSmallQuantity,
    setTypeSmallQuantity,
    typeLargeQuantity,
    setTypeLargeQuantity,
    setIconScale,
    setIconSmallQuantity,
    setIconLargeQuantity,
}: Props) {

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
