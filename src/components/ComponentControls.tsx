import React, { FormEvent, MouseEvent } from 'react';
import capitalize from '../utilities/capitalize';
import scaleMethodOptions, { ScaleMethodType } from '../utilities/scaleMethodOptions';

interface Props {
    baseComponentSizeIndex: number
    setBaseComponentSizeIndex: (value: number) => void
    componentLineHeight: number
    setComponentLineHeight: (value: number) => void
    componentSmallQuantity: number
    setComponentSmallQuantity: (value: number) => void
    componentLargeQuantity: number
    setComponentLargeQuantity: (value: number) => void
    componentMinHeightMethodOption: string
    setComponentMinHeightMethodOption: (value: ScaleMethodType) => void
    componentPaddingMethodOption: string
    setComponentPaddingMethodOption: (value: ScaleMethodType) => void
    baseComponentPaddingXIndex: number
    setBaseComponentPaddingXIndex: (value: number) => void
    baseComponentPaddingYIndex: number
    setBaseComponentPaddingYIndex: (value: number) => void
    scaleComponentRadius: boolean
    setScaleComponentRadius: (value: boolean) => void
    baseComponentRadius: number
    setBaseComponentRadius: (value: number) => void
    componentDensitySmallQuantity: number
    setComponentDensitySmallQuantity: (value: number) => void
    componentDensityLargeQuantity: number
    setComponentDensityLargeQuantity: (value: number) => void
    componentDensityScaleFactor: number
    setComponentDensityScaleFactor: (value: number) => void
}

export default function ComponentControls({
    baseComponentSizeIndex,
    setBaseComponentSizeIndex,
    componentLineHeight,
    setComponentLineHeight,
    componentSmallQuantity,
    setComponentSmallQuantity,
    componentLargeQuantity,
    setComponentLargeQuantity,
    componentMinHeightMethodOption,
    setComponentMinHeightMethodOption,
    componentPaddingMethodOption,
    setComponentPaddingMethodOption,
    baseComponentPaddingXIndex,
    setBaseComponentPaddingXIndex,
    baseComponentPaddingYIndex,
    setBaseComponentPaddingYIndex,
    scaleComponentRadius,
    setScaleComponentRadius,
    baseComponentRadius,
    setBaseComponentRadius,
    componentDensitySmallQuantity,
    setComponentDensitySmallQuantity,
    componentDensityLargeQuantity,
    setComponentDensityLargeQuantity,
    componentDensityScaleFactor,
    setComponentDensityScaleFactor,}: Props) {

    const componentScalingMethodInputs = scaleMethodOptions.map((method) => {
        return (
            <div className="radioGroup" key={`${method}`}>
                <input
                    type="radio"
                    id={`component${method}`}
                    name="componentScale_method"
                    defaultValue={method}
                    onClick={(event: MouseEvent<HTMLInputElement>) => (
                        setComponentMinHeightMethodOption(event.currentTarget.value as ScaleMethodType)
                    )}
                    defaultChecked={
                        method === componentMinHeightMethodOption ? true : false
                    }
                />
                <label htmlFor={`component${method}`}>{capitalize(method)}</label>
            </div>
        );
    });
    const componentPaddingMethodInputs = scaleMethodOptions.map((method) => {
        return (
            <div className="radioGroup" key={`${method}`}>
                <input
                    type="radio"
                    id={`componentPadding${method}`}
                    name="componentPaddingScale_method"
                    defaultValue={method}
                    onClick={(event: MouseEvent<HTMLInputElement>) => (
                        setComponentPaddingMethodOption(event.currentTarget.value as ScaleMethodType)
                    )}
                    defaultChecked={
                        method === componentPaddingMethodOption ? true : false
                    }
                />
                <label htmlFor={`componentPadding${method}`}>
                    {`${capitalize(method)}`}
                </label>
            </div>
        );
    });

    return (
        <>
            <fieldset>
                <legend>Default size</legend>
                <div className="segmentedControl">{componentScalingMethodInputs}</div>
                <div className="column">
                    <div className="formGroup">
                        <label>Min-height index</label>
                        <input
                            type="number"
                            defaultValue={baseComponentSizeIndex}
                            id="baseComponentSize"
                            onInput={(event: MouseEvent<HTMLInputElement>) => {
                                setBaseComponentSizeIndex(parseInt(event.currentTarget.value));
                            }}
                        />
                    </div>

                    <div className="formGroup">
                        <label>Line height</label>
                        <input
                            type="number"
                            id="componentLineHeight"
                            defaultValue={componentLineHeight}
                            step="0.1"
                            onInput={(event: FormEvent<HTMLInputElement>) => {
                                setComponentLineHeight(parseInt(event.currentTarget.value));
                            }}
                        />
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>Additional sizes</legend>
                <div className="column">
                    <div className="formGroup">
                        <label>Small sizes</label>
                        <input
                            type="number"
                            defaultValue={componentSmallQuantity}
                            step="1"
                            min="0"
                            onInput={(event: FormEvent<HTMLInputElement>) => {
                                setComponentSmallQuantity(parseInt(event.currentTarget.value));
                            }}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Large sizes</label>
                        <input
                            type="number"
                            defaultValue={componentLargeQuantity}
                            step="1"
                            min="0"
                            onInput={(event: FormEvent<HTMLInputElement>) => {
                                setComponentLargeQuantity(parseInt(event.currentTarget.value));
                            }}
                        />
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>Default density (padding)</legend>
                <div className="segmentedControl">{componentPaddingMethodInputs}</div>
                <div className="column">
                    <div className="formGroup">
                        <label>Left/right index</label>
                        <input
                            type="number"
                            id="componentXPaddingScale"
                            defaultValue={baseComponentPaddingXIndex}
                            step="1"
                            onInput={(event: FormEvent<HTMLInputElement>) => {
                                setBaseComponentPaddingXIndex(parseInt(event.currentTarget.value));
                            }}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Top/bottom index</label>
                        <input
                            type="number"
                            defaultValue={baseComponentPaddingYIndex}
                            step="1"
                            onInput={(event: FormEvent<HTMLInputElement>) => {
                                setBaseComponentPaddingYIndex(parseInt(event.currentTarget.value));
                            }}
                        />
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>Additional densities</legend>
                <div className="column">
                    <div className="formGroup">
                        <label>Scale factor</label>
                        <input
                            type="number"
                            defaultValue={componentDensityScaleFactor}
                            step="1"
                            min="1"
                            onInput={(event: FormEvent<HTMLInputElement>) => {
                                setComponentDensityScaleFactor(Number(event.currentTarget.value));
                            }}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Small densities</label>
                        <input
                            type="number"
                            defaultValue={componentDensitySmallQuantity}
                            step="1"
                            min="0"
                            onInput={(event: FormEvent<HTMLInputElement>) => {
                                setComponentDensitySmallQuantity(parseInt(event.currentTarget.value));
                            }}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Large densities</label>
                        <input
                            type="number"
                            defaultValue={componentDensityLargeQuantity}
                            step="1"
                            min="0"
                            onInput={(event: FormEvent<HTMLInputElement>) => {
                                setComponentDensityLargeQuantity(parseInt(event.currentTarget.value));
                            }}
                        />
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>Radius</legend>
                <div className="column">
                    <div className="formGroup">
                        <div className="checkboxGroup">
                            <input
                                type="checkbox"
                                name="scaleRadius"
                                id="scaleRadius"
                                onClick={(event: MouseEvent<HTMLInputElement>) => (
                                    setScaleComponentRadius(event.currentTarget.checked)
                                )}
                                defaultChecked={scaleComponentRadius}
                            />
                            <label htmlFor="scaleRadius">Scale border radius</label>
                        </div>
                    </div>
                    <div className="formGroup">
                        <label>Radius size index</label>
                        <input
                            type="number"
                            defaultValue={baseComponentRadius}
                            id="baseComponentRadius"
                            onInput={(event: FormEvent<HTMLInputElement>) => {
                                setBaseComponentRadius(parseInt(event.currentTarget.value));
                            }}
                        />
                    </div>
                </div>
            </fieldset>
        </>
    );
};
