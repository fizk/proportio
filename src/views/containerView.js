import React, { useState } from 'react';
import Panel from '../components/Panel';
import ContainerControls from '../components/ContainerControls';
import Containers from '../components/Containers';

export default function ContainerView ()  {
    const [showSpecs, setShowSpecs] = useState(true);
    const [containerElevation, setContainerElevation] = useState(true);

    return (
        <>
            <div className="splitView">
                <Panel direction="column">
                    <ContainerControls
                        containerElevation={containerElevation}
                        setContainerElevation={setContainerElevation}
                    />
                </Panel>

                <main className="demoRow demoRow--compact apply-font-main">
                    <div className="tabs_action">
                        <fieldset>
                            <div className="checkboxGroup">
                                <input
                                    type="checkbox"
                                    name="showComponentSpecs"
                                    id="showComponentSpecs"
                                    onClick={(e) => setShowSpecs(e.target.checked)}
                                    defaultChecked={showSpecs}
                                />
                                <label htmlFor="showComponentSpecs">Show container specs</label>
                            </div>
                        </fieldset>
                    </div>
                    <Containers
                        showSpecs={showSpecs}
                        containerElevation={containerElevation}
                    />
                </main>
            </div>
        </>
    );
};
