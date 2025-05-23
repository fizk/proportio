import React, { FormEvent, useState } from 'react';
import typeScaleOptions from '../utilities/typeScaleOptions';
import Dropdown, {Option, Group} from 'react-dropdown';

interface Props {
    spacingScaleFactor: number
    setSpacingScaleFactor: (value: number) => void
    spacingSmallQuantity: number
    setSpacingSmallQuantity: (value: number) => void
    spacingLargeQuantity: number
    setSpacingLargeQuantity: (value: number) => void
    spacingFormula: string
}

export default function SpacingControls({
    spacingScaleFactor,
    setSpacingScaleFactor,
    spacingSmallQuantity,
    setSpacingSmallQuantity,
    spacingLargeQuantity,
    setSpacingLargeQuantity,
    spacingFormula,
}: Props) {

    const [scaleInput, setScaleInput] = useState(spacingScaleFactor);

    return (
        <fieldset>
            <legend>Spacing</legend>
            <div className="column">
                <div className="formGroup">
                    <label htmlFor="spacingScale">Scale</label>

                    <Dropdown
                        options={typeScaleOptions as unknown as string[]}
                        onChange={(event: Option) => {
                            setScaleInput(Number(event.value));
                            if (Number(event.value) !== spacingScaleFactor) {
                                setSpacingScaleFactor(Number(event.value));
                            }
                        }}
                        value={
                            !typeScaleOptions.filter((item) => item.value === spacingScaleFactor,)[0]
                                ? typeScaleOptions.filter((item) => item.value === undefined)[0] as unknown as string
                                : typeScaleOptions.filter((item) => item.value === spacingScaleFactor,)[0] as unknown as string
                        }
                        placeholder={typeScaleOptions[1].value as unknown as string}
                    />

                    <input
                        id="spacingScale"
                        key={scaleInput}
                        type="number"
                        onChange={(e) => {
                            setSpacingScaleFactor(Number(e.target.value));
                        }}
                        step={spacingFormula === 'power' ? '0.001' : '1'}
                        min="0"
                        defaultValue={spacingScaleFactor}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="smallSpacings">Small sizes</label>
                    <input
                        id="smallSpacings"
                        type="number"
                        onInput={(event: FormEvent<HTMLInputElement>) => setSpacingSmallQuantity(Number(event.currentTarget.value))}
                        step="1"
                        min="0"
                        defaultValue={spacingSmallQuantity}
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="largeSpacings">Large sizes</label>
                    <input
                        id="largeSpacings"
                        type="number"
                        onInput={(event: FormEvent<HTMLInputElement>) => setSpacingLargeQuantity(Number(event.currentTarget.value))}
                        step="1"
                        min="0"
                        defaultValue={spacingLargeQuantity}
                    />
                </div>
            </div>
        </fieldset>
    );
};
