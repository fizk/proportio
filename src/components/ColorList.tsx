import React from "react";
import { luminosity } from '../utilities/color';
import { pSBC } from '../utilities/pSBC';
import '../styles/colorlist.css';

interface Props {
    colorArray: any[]
    colorShades: boolean
}

export default function ColorList ({
    colorArray,
    colorShades,
}: Props) {
    const index = [
        -.8, -.6, -.4, -.2, 0, .2, .4, .6, .8,
    ]
    return (
        <ul className="colorlist">
            {colorArray.map((color, i) => (
                <li className="colorlist__item" style={{backgroundColor: color.color}} key={i}>
                    <div className={`colorlist__color` + (luminosity(color.color) > 0.5 ? ' colorlist__color--light' : ' colorlist__color--dark')}>
                        {color.color}
                    </div>
                    {colorShades && (
                        <ul className="colorlist__shades">
                            {index.map((c, a) => (
                                <li style={{backgroundColor: pSBC(c, color.color)!}} key={a} className="colorlist__shade-item" />
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )
}
