import React, { FormEvent, MouseEvent } from 'react';
import capitalize from '../utilities/capitalize';
import scaleMethodOptions, { ScaleFormulaType } from '../utilities/scaleFormulas';

interface Props {
    baseRadiusSize: number
    setBaseRadiusSize: (value: number) => void
    radiusScaleFactor: number
    setRadiusScaleFactor: (value: number) => void
    radiusSmallQuantity: number
    setRadiusSmallQuantity: (value: number) => void
    radiusLargeQuantity: number
    setRadiusLargeQuantity: (value: number) => void
    radiusScaleFormula: string
    setRadiusScaleFormula: (value: ScaleFormulaType) => void
}

export default function RadiusControls({
    baseRadiusSize,
    setBaseRadiusSize,
    radiusScaleFactor,
    setRadiusScaleFactor,
    radiusSmallQuantity,
    setRadiusSmallQuantity,
    radiusLargeQuantity,
    setRadiusLargeQuantity,
    radiusScaleFormula,
    setRadiusScaleFormula,
}: Props) {
    const inputs = scaleMethodOptions.map((method) => {
        return (
            <div className="radioGroup" key={`radius${method}`}>
                <input
                    type="radio"
                    id={`Radius${method}`}
                    name="RadiusScale_method"
                    value={method}
                    onClick={(event: MouseEvent<HTMLInputElement>) => (
                        setRadiusScaleFormula(event.currentTarget.value as ScaleFormulaType)
                    )}
                    defaultChecked={method === radiusScaleFormula ? true : false}
                />
                <label htmlFor={`Radius${method}`}>{capitalize(method)}</label>
            </div>
        );
    });

    return (
        <fieldset>
            <legend>Radius</legend>
            <div className="segmentedControl">{inputs}</div>
            <div className="column">
                <div className="formGroup">
                    <label htmlFor="baseRadius">Base radius size</label>
                    <input
                        id="baseRadius"
                        type="number"
                        onInput={(event: FormEvent<HTMLInputElement>) => (
                            setBaseRadiusSize(Number(event.currentTarget.value))
                        )}
                        step="1"
                        min="0"
                        defaultValue={baseRadiusSize}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="radiusScale">Radius scale</label>
                    <input
                        id="radiusScale"
                        type="number"
                        onInput={(event: FormEvent<HTMLInputElement>) => (
                            setRadiusScaleFactor(Number(event.currentTarget.value))
                        )}
                        step={radiusScaleFormula === 'power' ? '0.1' : '1'}
                        min="0"
                        defaultValue={radiusScaleFactor}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="smallRadii">Small sizes</label>
                    <input
                        id="smallRadii"
                        type="number"
                        onInput={(event: FormEvent<HTMLInputElement>) => (
                            setRadiusSmallQuantity(Number(event.currentTarget.value))
                        )}
                        step="1"
                        min="0"
                        defaultValue={radiusSmallQuantity}
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="largeRadii">Large sizes</label>
                    <input
                        id="largeRadii"
                        type="number"
                        onInput={(event: FormEvent<HTMLInputElement>) => (
                            setRadiusLargeQuantity(Number(event.currentTarget.value))
                        )}
                        step="1"
                        min="0"
                        defaultValue={radiusLargeQuantity}
                    />
                </div>
            </div>
        </fieldset>
    );
};
