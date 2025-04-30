import React from 'react';
import SpacingControls from '../components/spacingControls';
import Spacing from '../components/spacing';
import Radius from '../components/radius';
import RadiusControls from '../components/radiusControls';
import Panel from '../components/panel';
import ElevationControls from '../components/elevationControls';
import Elevation from '../components/elevation';
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
