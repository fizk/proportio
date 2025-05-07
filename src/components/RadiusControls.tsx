import React, { FormEvent, MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import capitalize from '../utilities/capitalize';
import scaleMethodOptions from '../utilities/scaleFormulas';
import {
    baseRadiusSizeState,
    radiusScaleFactorState,
    radiusSmallQuantityState,
    radiusLargeQuantityState,
    radiusScaleFormulaState,
} from '../states/radius';

export default function RadiusControls() {
    const [baseRadiusSize, setBaseRadiusSize] = useRecoilState(baseRadiusSizeState);
    const [radiusScaleFactor, setRadiusScaleFactor] = useRecoilState(radiusScaleFactorState,);
    const [radiusSmallQuantity, setRadiusSmallQuantity] = useRecoilState(radiusSmallQuantityState,);
    const [radiusLargeQuantity, setRadiusLargeQuantity] = useRecoilState(radiusLargeQuantityState,);
    const [radiusScaleFormula, setRadiusScaleFormula] = useRecoilState(radiusScaleFormulaState,);

    const inputs = scaleMethodOptions.map((method) => {
        return (
            <div className="radioGroup" key={`radius${method}`}>
                <input
                    type="radio"
                    id={`Radius${method}`}
                    name="RadiusScale_method"
                    value={method}
                    onClick={(event: MouseEvent<HTMLInputElement>) => (
                        setRadiusScaleFormula(event.currentTarget.value)
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
