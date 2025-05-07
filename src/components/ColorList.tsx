import React from "react";
import { colorState, colorShadesState } from '../states/color';
import { luminosity } from '../utilities/color';
import { useRecoilState } from 'recoil';
import { pSBC } from '../utilities/pSBC';
import '../styles/colorlist.css';


export default function ColorList () {
    const [colorArray, setColorArray] = useRecoilState(colorState);
    const [colorShades, setColorShades] = useRecoilState(colorShadesState);
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
