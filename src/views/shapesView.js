import React from 'react';
import SpacingControls from '../components/SpacingControls';
import Spacing from '../components/Spacing';
import Radius from '../components/Radius';
import RadiusControls from '../components/RadiusControls';
import Panel from '../components/Panel';
import ElevationControls from '../components/ElevationControls';
import Elevation from '../components/Elevation';
import '../styles/tabs.css';
import '../styles/toolbar.css';

export default function ShapesView() {
    const spacerLineHeight = 8;

    return (
        <>
            <div className="splitView">
                <Panel direction="column">
                    <SpacingControls />
                    <RadiusControls />
                    <ElevationControls />
                </Panel>
                <main className="demoRow apply-font-main">
                    <Spacing spacerLineHeight={spacerLineHeight} />
                    <Radius />
                    <Elevation />
                </main>
            </div>
        </>
    );
};
