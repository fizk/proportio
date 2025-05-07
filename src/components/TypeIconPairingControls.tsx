import React, { FormEvent, MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import capitalize from '../utilities/capitalize';
import {
    textIconGapIndexState,
    textIconIconSizeIndexState,
    textIconGapScaleFormulaState,
} from '../states/textIconPair';
import scaleMethodOptions from '../utilities/scaleMethodOptions';

export default function TypeIconPairingControls() {
    const [textIconGapIndex, setTextIconGapIndex] = useRecoilState(textIconGapIndexState,);
    const [textIconIconSizeIndex, setTextIconIconSizeIndex] = useRecoilState(textIconIconSizeIndexState,);
    const [textIconGapScaleFormula, setTextIconGapScaleFormula] = useRecoilState(textIconGapScaleFormulaState,);

    const inputs = scaleMethodOptions.map((method) => {
        return (
            <div className="radioGroup" key={`typeIconPiar${method}`}>
                <input
                    type="radio"
                    id={`gap${method}`}
                    name="gap_method"
                    value={method}
                    onClick={(event: MouseEvent<HTMLInputElement>) => (
                        setTextIconGapScaleFormula(event.currentTarget.value)
                    )}
                    defaultChecked={method === textIconGapScaleFormula ? true : false}
                />
                <label htmlFor={`gap${method}`}>{capitalize(method)}</label>
            </div>
        );
    });

    const fieldLabel = 'Gap index';
    const fieldMax = '500';
    const fieldMin = '-500';

    return (
        <fieldset>
            <legend>Type-icon pairing</legend>
            <div className="segmentedControl">{inputs}</div>
            <div className="column">
                <div className="formGroup">
                    <label htmlFor="textIconGapIndex">{fieldLabel}</label>
                    <input
                        id="textIconGapIndex"
                        type="number"
                        onInput={(event: FormEvent<HTMLInputElement>) => (
                            setTextIconGapIndex(Number(event.currentTarget.value))
                        )}
                        step="1"
                        min={fieldMin}
                        max={fieldMax}
                        defaultValue={textIconGapIndex}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="iconSizeIndex">Icon size index</label>
                    <input
                        id="iconSizeIndex"
                        type="number"
                        onInput={(event: FormEvent<HTMLInputElement>) => (
                            setTextIconIconSizeIndex(Number(event.currentTarget.value))
                        )}
                        step="1"
                        min={fieldMin}
                        max={fieldMax}
                        defaultValue={textIconIconSizeIndex}
                    />
                </div>
            </div>
        </fieldset>
    );
};
