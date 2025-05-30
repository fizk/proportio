import React, { useState, useEffect, MouseEvent } from "react";
import Panel from "../elements/Panel";
import CubicBezier from "../components/CubicBezier";
import AnimationDemonstration from "../components/AnimationDemonstration";
import { useBase } from "../context/BaseContext";
import CurvePreview from "../components/CurvePreview";
import '../styles/cubicView.css';

export default function CubicBezierView () {
    const [curve, setCurve] = useState<[number, number, number, number]>([0.36, -0.48, 0.64, 1.36])
    const [identifier, setIdentifier] = useState<string>('')

    const {
        base: {cubicArray},
        setCubicArray
    } = useBase();

    useEffect(() => {
        setIdentifier(cubicArray[0].id)
        setCurve(cubicArray[0].values)
        cubicArray[0]
    }, []);

    const handleNameChange = (value: string, id: string) => {
        setCubicArray(cubicArray.map(item => (item.id === id ? {...item, name: value} : item)));
    }

    const handleCurveChange = (points: [number, number, number, number]) => {
        setCurve(points);
        setCubicArray(cubicArray.map(item => {
            if (item.id === identifier) {
                return {
                    ...item,
                    values: points
                }
            } else {
                return item;
            }
        }));
    }

    const handleAdd = () => {
        const id = new Date().getTime().toString();
        const values: [number, number, number, number] = [0.14, 0.14, 0.86, 0.86];
        setCubicArray([
            ...cubicArray,
            {
                id: id,
                name: id,
                values: values,
            }
        ]);
        setIdentifier(id);
        setCurve(values);
    }

    const handleRemove = (event: MouseEvent<HTMLButtonElement>, id: string) => {
        event.stopPropagation();
        event.preventDefault();

        if (id === identifier) {
            const filteredCubicArray = cubicArray.filter(item => item.id !== id);
            setIdentifier(filteredCubicArray[0].id);
            setCurve(filteredCubicArray[0].values);
            setCubicArray(filteredCubicArray);
        }
        else {
            setCubicArray(cubicArray.filter(item => item.id !== id))
        }
    }

    const handleSelect = (id: string) => {
        setIdentifier(id);
        const selected = cubicArray.find(item => item.id === id);
        selected && setCurve(selected.values);
    }

    return (
        <div className="splitView">
            <Panel direction="column">
                <fieldset style={{gap: 0}}>
                    <legend>Cubic Bézier</legend>
                    {cubicArray.map(item => (
                        <div key={item.id} className={item.id === identifier ? "cubic-item cubic-item--selected" : "cubic-item"} onClick={_ => handleSelect(item.id)}>
                            <CurvePreview cubicPoints={item.values}  />
                            <input onChange={event => handleNameChange(event.currentTarget.value, item.id)}value={item.name} />
                            <button onClick={event => handleRemove(event, item.id)}>remove</button>
                        </div>
                    ))}
                </fieldset>

                <button onClick={handleAdd}>add</button>
                cubic-bezier({curve.join(', ')}),
            </Panel>
            <main className="">
                <CubicBezier points={curve} onUpdate={handleCurveChange} />
                <AnimationDemonstration cubicPoint={curve} />
            </main>
        </div>
    )
}
