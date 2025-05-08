import React from 'react';
import Panel from '../components/Panel';
import ColorList from '../components/ColorList';
import ColorControls from '../components/ColorControls';
import '../styles/tabs.css';
import '../styles/toolbar.css';

export default function ColorView() {
    return (
        <div className="splitView">
            <Panel direction="column">
                <ColorControls />
            </Panel>
            <main className="">
                <ColorList />
            </main>
        </div>
    );
};
