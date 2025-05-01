import React, { useState } from 'react';
import BaseControls from '../components/BaseControls';
import TypeControls from '../components/TypeControls';
import IconControls from '../components/IconControls';
import TypeIconPairingControls from '../components/TypeIconPairingControls';
import Typography from '../components/Typography';
import Iconography from '../components/Iconography';
import TypeIconPairing from '../components/typeIconPairing';
import Panel from '../components/Panel';
import '../styles/tabs.css';
import '../styles/toolbar.css';

export default function TypographyView () {
    const [sampleText, setSampleText] = useState('Proportio');

    return (
        <>
            <div className="splitView">
                <Panel direction="column">
                    <BaseControls />
                    <TypeControls sampleText={sampleText} setSampleText={setSampleText} />
                    <IconControls />
                    <TypeIconPairingControls />
                </Panel>
                <main className="demoRow apply-font-main">
                    <Typography sampleText={sampleText} />
                    <Iconography />
                    <TypeIconPairing sampleText={sampleText} />
                </main>
            </div>
        </>
    );
};
