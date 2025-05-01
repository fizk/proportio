import React from 'react';
import { useRecoilState } from 'recoil';
import { typeFontFamilyState, typeFontWeightState } from '../states/typography';

export default function TypeControls({setSampleText, sampleText}) {
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
                        onInput={(e) => {
                            setTypeFontWeight(Number(e.target.value));
                            document.documentElement.style.setProperty(
                                `--demoFontWeight`,
                                e.target.value,
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
                        onInput={(e) => setSampleText(e.target.value)}
                        defaultValue={sampleText}
                    />
                </div>
            </div>
        </fieldset>
    );
};
