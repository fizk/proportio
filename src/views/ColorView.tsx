import React from 'react';
import Panel from '../elements/Panel';
import ColorList from '../components/ColorList';
import ColorControls from '../components/ColorControls';
import '../styles/tabs.css';
import '../styles/toolbar.css';
import { useBase } from '../context/BaseContext'

export default function ColorView() {

    const {
        base: {
            colorArray,
            colorShades
        },
        setColorArray,
        setColorShades
    } = useBase()

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
