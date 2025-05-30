import React, { FormEvent, MouseEvent } from 'react';
import capitalize from '../utilities/capitalize';
import scaleMethodOptions, { ScaleFormulaType } from '../utilities/scaleFormulas';
import Slider from '../elements/Slider';

interface Props {
    baseElevationSize: number
    setBaseElevationSize: (value: number) => void
    elevationScaleFactor: number
    setElevationScaleFactor: (value: number) => void
    elevationSmallQuantity: number
    setElevationSmallQuantity: (value: number) => void
    elevationLargeQuantity: number
    setElevationLargeQuantity: (value: number) => void
    elevationScaleFormula: string
    setElevationScaleFormula: (value: ScaleFormulaType) => void
    elevationOffsetY: number
    setElevationOffsetY: (value: number) => void
}

export default function ElevationControls({
    baseElevationSize,
    setBaseElevationSize,
    elevationScaleFactor,
    setElevationScaleFactor,
    elevationSmallQuantity,
    setElevationSmallQuantity,
    elevationLargeQuantity,
    setElevationLargeQuantity,
    elevationScaleFormula,
    setElevationScaleFormula,
    elevationOffsetY,
    setElevationOffsetY,
}: Props) {

    const inputs = scaleMethodOptions.map((method) => {
        return (
            <div className="radioGroup" key={`elevation${method}`}>
                <input
                    type="radio"
                    id={`Elevation${method}`}
                    name="ElevationScale_method"
                    value={method}
                    onClick={(event: MouseEvent<HTMLInputElement>) => (
                        setElevationScaleFormula(event.currentTarget.value as ScaleFormulaType)
                    )}
                    defaultChecked={method === elevationScaleFormula ? true : false}
                />
                <label htmlFor={`Elevation${method}`}>{capitalize(method)}</label>
            </div>
        );
    });

    return (
        <fieldset>
            <legend>Elevation</legend>
            <div className="segmentedControl">{inputs}</div>
            <div className="column">
                <div className="formGroup">
                    <label htmlFor="baseElevationSize">Base elevation size</label>
                    <input
                        id="baseElevationSize"
                        type="number"
                        onInput={(event: MouseEvent<HTMLInputElement>) => (
                            setBaseElevationSize(Number(event.currentTarget.value))
                        )}
                        step="1"
                        min="0"
                        defaultValue={baseElevationSize}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="elevationScale">Elevation scale</label>
                    <input
                        id="elevationScale"
                        type="number"
                        onInput={(event: FormEvent<HTMLInputElement>) => (
                            setElevationScaleFactor(Number(event.currentTarget.value))
                        )}
                        step={elevationScaleFormula === 'power' ? '0.1' : '1'}
                        min="0"
                        defaultValue={elevationScaleFactor}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="smallElevations">Small sizes</label>
                    <input
                        id="smallElevations"
                        type="number"
                        onInput={(event: FormEvent<HTMLInputElement>) => (
                            setElevationSmallQuantity(Number(event.currentTarget.value))
                        )}
                        step="1"
                        min="0"
                        defaultValue={elevationSmallQuantity}
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="largeElevations">Large sizes</label>
                    <input
                        id="largeElevations"
                        type="number"
                        onInput={(event: FormEvent<HTMLInputElement>) => (
                            setElevationLargeQuantity(Number(event.currentTarget.value))
                        )}
                        step="1"
                        min="0"
                        defaultValue={elevationLargeQuantity}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="shadowDistance">Shadow distance</label>
                    <Slider
                        id="shadowDistance"
                        onInput={setElevationOffsetY}
                        step="1"
                        min="0"
                        max="200"
                        unit="%"
                        defaultValue={elevationOffsetY}
                    />
                </div>
            </div>
        </fieldset>
    );
};
