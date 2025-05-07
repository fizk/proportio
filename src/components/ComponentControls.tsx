import React, { FormEvent, MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import capitalize from '../utilities/capitalize';
import scaleMethodOptions from '../utilities/scaleMethodOptions';
import {
    baseComponentSizeIndexState,
    componentLineHeightState,
    componentSmallQuantityState,
    componentLargeQuantityState,
    componentMinHeightMethodOptionState,
    componentPaddingMethodOptionState,
    baseComponentPaddingXIndexState,
    baseComponentPaddingYIndexState,
    scaleComponentRadiusState,
    baseComponentRadiusState,
    componentDensitySmallQuantityState,
    componentDensityLargeQuantityState,
    componentDensityScaleFactorState,
} from '../states/components';

interface Props {
    showComponentIcon: boolean
    setShowComponentIcon: (value: boolean) => void
    showComponentText: boolean
    setShowComponentText: (value: boolean) => void
}

export default function ComponentControls(props: Props) {
    const [baseComponentSizeIndex, setBaseComponentSizeIndex] = useRecoilState(baseComponentSizeIndexState,);
    const [componentLineHeight, setComponentLineHeight] = useRecoilState(componentLineHeightState,);
    const [componentSmallQuantity, setComponentSmallQuantity] = useRecoilState(componentSmallQuantityState,);
    const [componentLargeQuantity, setComponentLargeQuantity] = useRecoilState(componentLargeQuantityState,);
    const [componentMinHeightMethodOption, setComponentMinHeightMethodOption] = useRecoilState(componentMinHeightMethodOptionState);
    const [componentPaddingMethodOption, setComponentPaddingMethodOption] = useRecoilState(componentPaddingMethodOptionState);
    const [baseComponentPaddingXIndex, setBaseComponentPaddingXIndex] = useRecoilState(baseComponentPaddingXIndexState);
    const [baseComponentPaddingYIndex, setBaseComponentPaddingYIndex] = useRecoilState(baseComponentPaddingYIndexState);
    const [scaleComponentRadius, setScaleComponentRadius] = useRecoilState(scaleComponentRadiusState,);
    const [baseComponentRadius, setBaseComponentRadius] = useRecoilState(baseComponentRadiusState,);
    const [componentDensitySmallQuantity, setComponentDensitySmallQuantity] = useRecoilState(componentDensitySmallQuantityState);
    const [componentDensityLargeQuantity, setComponentDensityLargeQuantity] = useRecoilState(componentDensityLargeQuantityState);
    const [componentDensityScaleFactor, setComponentDensityScaleFactor] = useRecoilState(componentDensityScaleFactorState);

    const componentScalingMethodInputs = scaleMethodOptions.map((method) => {
        return (
            <div className="radioGroup" key={`${method}`}>
                <input
                    type="radio"
                    id={`component${method}`}
                    name="componentScale_method"
                    defaultValue={method}
                    onClick={(event: MouseEvent<HTMLInputElement>) => (
                        setComponentMinHeightMethodOption(event.currentTarget.value)
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
                        setComponentPaddingMethodOption(event.currentTarget.value)
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
