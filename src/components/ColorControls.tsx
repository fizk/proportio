import React from "react";
import { random } from '../utilities/color';

interface Props {
    colorArray: any[]
    setColorArray: (value: any[]) => void
    colorShades: boolean
    setColorShades: (value: boolean) => void
}

export default function ColorControls ({
    colorArray,
    setColorArray,
    colorShades,
    setColorShades,
}: Props) {

    const handleAddItem = () => {
        setColorArray([
            ...colorArray,
            random(),
        ]);
    }

    const handleUpdateColor = (color: string, index: number) => {
        const array = colorArray.slice();
        array[index] = {
            color: color,
            name: array[index].name,
        }
        setColorArray(array);
    }

    const handleUpdateName = (name: string, index: number) => {
        const array = colorArray.slice();
        array[index] = {
            color: array[index].color,
            name: name,
        }
        setColorArray(array);
    }

    const handleRemoveItem = (index: number) => {
        if (colorArray.length === 1) return;
        setColorArray([
            ...colorArray.slice(0, index),
            ...colorArray.slice(index + 1),
        ]);
    }

    return (
        <>
            <fieldset>
                <legend>Colors</legend>
                <div className="column">
                    <div className="formGroup">
                        <button onClick={handleAddItem}>add</button>
                    </div>
                        {colorArray.map((color, i) => (
                            <div className="formGroup" key={`${color}${i}`}>
                                <input type='color' value={color.color} onChange={event => handleUpdateColor(event.currentTarget.value, i)} />
                                <input value={color.name} onChange={event => handleUpdateName(event.currentTarget.value, i)} />
                                <button onClick={() => handleRemoveItem(i)}>remove</button>
                            </div>
                        ))}
                </div>
            </fieldset>

            <fieldset>
                <legend>Shades</legend>
                <div className="column">
                    <div className="formGroup">
                        <div className="checkboxGroup">
                            <input
                                type="checkbox"
                                name="scaleRadius"
                                id="scaleRadius"
                                onClick={event => setColorShades(event.currentTarget.checked)}
                                defaultChecked={colorShades}
                            />
                            <label htmlFor="scaleRadius">Show shades</label>
                        </div>
                    </div>
                </div>
            </fieldset>
        </>
    )
}
