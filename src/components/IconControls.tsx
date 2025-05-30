import React, { MouseEvent } from 'react';
import capitalize from '../utilities/capitalize';
import scaleMethodOptions, { ScaleFormulaType } from '../utilities/scaleFormulas';
import Dropdown from 'react-dropdown';
import Slider from '../elements/Slider';

const feather = require('feather-icons');

interface Props {
    iconScaleFormula: string
    setIconScaleFormula: (value: ScaleFormulaType) => void
    iconStroke: number
    setIconStroke: (value: number) => void
    icon: any
    setIcon: (value: any) => void
}

export default function IconControls ({
    iconScaleFormula,
    setIconScaleFormula,
    iconStroke,
    setIconStroke,
    icon,
    setIcon,
}: Props) {

    const availableIcons = Object.keys(feather.icons);

    const inputs = scaleMethodOptions.map((method) => {
        return (
            <div className="radioGroup" key={`iconography${method}`}>
                <input
                    type="radio"
                    id={`Icon${method}`}
                    name="IconScale_method"
                    value={method}
                    onClick={(event: MouseEvent<HTMLInputElement>) => (
                        setIconScaleFormula(event.currentTarget.value as ScaleFormulaType)
                    )}
                    defaultChecked={method === iconScaleFormula ? true : false}
                />
                <label htmlFor={`Icon${method}`}>{capitalize(method)}</label>
            </div>
        );
    });

    return (
        <fieldset>
            <legend>
                Iconography
                <cite>
                    via{' '}
                    <a href="https://feathericons.com/" target="_blank">
                        Feather icons
                    </a>
                </cite>
            </legend>
            <div className="column">
                <div className="formGroup">
                    <label>Icon</label>
                    <span className="iconPicker" style={{ width: 'calc(100% - 120px)' }}>
                        <Dropdown
                            options={availableIcons}
                            onChange={(e) => {
                                setIcon(e.value);
                            }}
                            value={icon}
                            placeholder={icon}
                        />
                    </span>
                </div>
                <div className="formGroup">
                    <label htmlFor="iconStroke">Stroke</label>
                    <Slider
                        id="iconStroke"
                        onInput={setIconStroke}
                        step="0.25"
                        min="0.25"
                        max="5"
                        unit="px"
                        defaultValue={iconStroke}
                    />
                </div>
            </div>
        </fieldset>
    );
};
