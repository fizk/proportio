import React from "react";
import { useRecoilState } from 'recoil';
import { colorState, colorShadesState } from '../states/color';
import { random } from '../utilities/color';

export default function ColorControls () {
    const [colorArray, setColorArray] = useRecoilState(colorState);
    const [colorShades, setColorShades] = useRecoilState(colorShadesState);

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
                            <div className="formGroup">
                                <input type='color' value={color.color} onChange={event => handleUpdateColor(event.currentTarget.value, i)} />
                                <input value={color.name} onChange={event => handleUpdateName(event.currentTarget.value, i)} />
                                <button onClick={() => handleRemoveItem(i)}>remove</button>
                            </div>
                        ))}
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
