import React, { MouseEvent, useState } from 'react';
import Panel from '../components/Panel';
import ContainerControls from '../components/ContainerControls';
import Containers from '../components/Containers';

export default function ContainerView ()  {
    const [showSpecs, setShowSpecs] = useState<boolean>(true);
    const [containerElevation, setContainerElevation] = useState<boolean>(true);

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
                                    onClick={(event: MouseEvent<HTMLInputElement>) => (
                                        setShowSpecs(event.currentTarget.checked)
                                    )}
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
