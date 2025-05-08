import React, { FormEvent } from "react";

interface Props {
    step: string
    min: string
    max: string
    defaultValue: string | number
    onInput: (value: number) => void
    unit: string
    id?: string
}

export default function Slider({
    step,
    min,
    max,
    defaultValue,
    onInput,
    unit,
    id = '',
}: Props) {
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
