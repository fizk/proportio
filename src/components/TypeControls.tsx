import React, { FormEvent } from 'react';
import { useRecoilState } from 'recoil';
import { typeFontFamilyState, typeFontWeightState } from '../states/typography';

interface Props {
    setSampleText: (value: string) => void
    sampleText: string
}

export default function TypeControls({setSampleText, sampleText}: Props) {
    const [activeFontFamily, setActiveFontFamily] = useRecoilState(typeFontFamilyState);
    const [typeFontWeight, setTypeFontWeight] = useRecoilState(typeFontWeightState);

    return (
        <fieldset>
            <legend>
                Typography
            </legend>

            <div className="column">
                <div className="formGroup">
                    <label htmlFor="fontWeight">Font weight</label>
                    <input
                        id="fontWeight"
                        type="number"
                        onInput={(event: FormEvent<HTMLInputElement>) => {
                            setTypeFontWeight(Number(event.currentTarget.value));
                            document.documentElement.style.setProperty(
                                `--demoFontWeight`,
                                event.currentTarget.value,
                            );
                        }}
                        step="100"
                        min="100"
                        max="900"
                        defaultValue={typeFontWeight}
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="sampleText">Sample text</label>
                    <input
                        id="sampleText"
                        type="text"
                        style={{ width: '140px' }}
                        onInput={(event: FormEvent<HTMLInputElement>) => setSampleText(event.currentTarget.value)}
                        defaultValue={sampleText}
                    />
                </div>
            </div>
        </fieldset>
    );
};
