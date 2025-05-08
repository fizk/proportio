import React, { FormEvent, MouseEvent } from 'react';
import scaleMethodOptions from '../utilities/scaleMethodOptions';
import capitalize from '../utilities/capitalize';

interface Props {
    containerElevation: boolean,
    setContainerElevation: (value: boolean) => void
    containerSmallSizes: number
    setContainerSmallSizes: (value: number) => void
    containerLargeSizes: number
    setContainerLargeSizes: (value: number) => void
    containerBaseRadiusIndex: number
    setContainerBaseRadiusIndex: (value: number) => void
    containerBaseElevationIndex: number
    setContainerBaseElevationIndex: (value: number) => void
    containerRadiusScaleFactor: number
    setContainerRadiusScaleFactor: (value: number) => void
    containerBasePaddingXIndex: number
    setContainerBasePaddingXIndex: (value: number) => void
    containerBasePaddingYIndex: number
    setContainerBasePaddingYIndex: (value: number) => void
    containerPaddingScaleFactor: number
    setContainerPaddingScaleFactor: (value: number) => void
    containerPaddingMethodOption: string
    setContainerPaddingMethodOption: (value: string) => void
}

export default function ContainerControls ({
    containerElevation,
    setContainerElevation,
    containerSmallSizes,
    setContainerSmallSizes,
    containerLargeSizes,
    setContainerLargeSizes,
    containerBaseRadiusIndex,
    setContainerBaseRadiusIndex,
    containerBaseElevationIndex,
    setContainerBaseElevationIndex,
    containerRadiusScaleFactor,
    setContainerRadiusScaleFactor,
    containerBasePaddingXIndex,
    setContainerBasePaddingXIndex,
    containerBasePaddingYIndex,
    setContainerBasePaddingYIndex,
    containerPaddingScaleFactor,
    setContainerPaddingScaleFactor,
    containerPaddingMethodOption,
    setContainerPaddingMethodOption,
}: Props) {

    const containerPaddingMethodInputs = scaleMethodOptions.map((method) => {
        return (
            <div className="radioGroup" key={`${method}`}>
                <input
                    type="radio"
                    id={`containerPadding${method}`}
                    name="containerPaddingScale_method"
                    defaultValue={method}
                    onClick={(event: MouseEvent<HTMLInputElement>) => (
                        setContainerPaddingMethodOption(event.currentTarget.value)
                    )}
                    defaultChecked={
                        method === containerPaddingMethodOption ? true : false
                    }
                />
                <label htmlFor={`containerPadding${method}`}>
                    {`${capitalize(method)}`}
                </label>
            </div>
        );
    });

    return (
        <>
            <fieldset>
                <legend>Sizes</legend>
                <div className="column">
                    <div className="formGroup">
                        <label htmlFor="containerSmallSizes">Small sizes</label>
                        <input
                            id="containerSmallSizes"
                            type="number"
                            onInput={(event: FormEvent<HTMLInputElement>) => (
                                setContainerSmallSizes(Number(event.currentTarget.value))
                            )}
                            step="1"
                            min="0"
                            max="9"
                            defaultValue={containerSmallSizes}
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="containerLargeSizes">Large sizes</label>
                        <input
                            id="containerLargeSizes"
                            type="number"
                            onInput={(event: FormEvent<HTMLInputElement>) => (
                                setContainerLargeSizes(Number(event.currentTarget.value))
                            )}
                            step="1"
                            min="1"
                            max="10"
                            defaultValue={containerLargeSizes}
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Padding</legend>
                <div className="segmentedControl">{containerPaddingMethodInputs}</div>
                <div className="column">
                    <div className="formGroup">
                        <label htmlFor="containerXPaddingScale">
                            Top/bottom padding index
                        </label>
                        <input
                            type="number"
                            id="containerXPaddingScale"
                            defaultValue={containerBasePaddingYIndex}
                            step="1"
                            onInput={(event: FormEvent<HTMLInputElement>) => {
                                setContainerBasePaddingYIndex(Number(event.currentTarget.value));
                            }}
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="containerYPaddingScale">
                            Left/right padding index
                        </label>
                        <input
                            type="number"
                            id="containerYPaddingScale"
                            defaultValue={containerBasePaddingXIndex}
                            step="1"
                            onInput={(event: FormEvent<HTMLInputElement>) => {
                                setContainerBasePaddingXIndex(Number(event.currentTarget.value));
                            }}
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="containerScaleFactor">Scale factor</label>
                        <input
                            id="containerScaleFactor"
                            type="number"
                            defaultValue={containerPaddingScaleFactor}
                            step="1"
                            min="1"
                            onInput={(event: FormEvent<HTMLInputElement>) => {
                                setContainerPaddingScaleFactor(Number(event.currentTarget.value));
                            }}
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Radius</legend>
                <div className="column">
                    <div className="formGroup">
                        <label htmlFor="baseRadius">Base radius index</label>
                        <input
                            id="baseRadius"
                            type="number"
                            onInput={(event: FormEvent<HTMLInputElement>) =>
                                setContainerBaseRadiusIndex(Number(event.currentTarget.value))
                            }
                            step="1"
                            defaultValue={containerBaseRadiusIndex}
                        />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="radiusScaleFactor">Radius scale factor</label>
                        <input
                            id="radiusScaleFactor"
                            type="number"
                            onInput={(event: FormEvent<HTMLInputElement>) =>
                                setContainerRadiusScaleFactor(Number(event.currentTarget.value))
                            }
                            step="1"
                            min="1"
                            defaultValue={containerRadiusScaleFactor}
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Elevation</legend>
                <div className="column">
                    <div className="checkboxGroup">
                        <input
                            type="checkbox"
                            name="componentElevation"
                            id="componentElevation"
                            onClick={(event: FormEvent<HTMLInputElement>) => (
                                setContainerElevation(event.currentTarget.checked)
                            )}
                            defaultChecked={containerElevation}
                        />
                        <label htmlFor="componentElevation">Apply elevations</label>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="elevationIndex">Elevation index</label>
                        <input
                            id="elevationIndex"
                            type="number"
                            onInput={(event: FormEvent<HTMLInputElement>) =>
                                setContainerBaseElevationIndex(Number(event.currentTarget.value))
                            }
                            step="1"
                            defaultValue={containerBaseElevationIndex}
                        />
                    </div>
                </div>
            </fieldset>
        </>
    );
};
