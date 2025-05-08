import React from 'react';
import Panel from '../elements/Panel';
import ColorList from '../components/ColorList';
import ColorControls from '../components/ColorControls';
import { useRecoilState } from 'recoil';
import { colorState, colorShadesState } from '../states/color';
import '../styles/tabs.css';
import '../styles/toolbar.css';

export default function ColorView() {
    const [colorArray, setColorArray] = useRecoilState(colorState);
    const [colorShades, setColorShades] = useRecoilState(colorShadesState);

    return (
        <div className="splitView">
            <Panel direction="column">
                <ColorControls
                    colorArray={colorArray}
                    setColorArray={setColorArray}
                    colorShades={colorShades}
                    setColorShades={setColorShades}
                />
            </Panel>
            <main className="">
                <ColorList
                    colorArray={colorArray}
                    colorShades={colorShades}
                />
            </main>
        </div>
    );
};
