import React, { FormEvent } from "react";

interface Props {
    step: string
    min: string
    max: string
    defaultValue: string | number
    onInput: (value: number) => void
    unit: string
    id: string
}

export default function Slider(props: Props) {
    const step = props.step;
    const min = props.min;
    const max = props.max;
    const defaultValue = props.defaultValue;
    const onInput = props.onInput;
    const unit = props.unit;
    const id = props.id ? props.id : '';

    return (
        <div className="slider">
            <input
                id={id}
                className="slider_input"
                type="range"
                onInput={(event: FormEvent<HTMLInputElement>) => {
                    onInput(Number(event.currentTarget.value));
                }}
                step={step}
                min={min}
                max={max}
                defaultValue={defaultValue}
            />
            <span className="slider_value">
                {defaultValue}
                {unit}
            </span>
        </div>
    );
};
