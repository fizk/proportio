import React, { MouseEvent, useState } from 'react';
import ComponentControls from '../components/ComponentControls';
import ComponentSpecs from '../components/ComponentSpecs';
import Panel from '../components/Panel';
import '../styles/tabs.css';

interface Props {
    iconLineHeight: number
}

export default function ComponentsView({iconLineHeight}: Props) {
    const [showSpecs, setShowSpecs] = useState<boolean>(true);
    const [showComponentIcon, setShowComponentIcon] = useState<boolean>(true);
    const [showComponentText, setShowComponentText] = useState<boolean>(true);

    return (
        <>
            <div className="splitView">
                <Panel direction="column">
                    <ComponentControls
                        showComponentIcon={showComponentIcon}
                        setShowComponentIcon={setShowComponentIcon}
                        showComponentText={showComponentText}
                        setShowComponentText={setShowComponentText}
                    />
                </Panel>

                <main className="demoRow apply-font-main">
                    <div className="tabs_action">
                        <fieldset>
                            <div className="checkboxGroup">
                                <input
                                    type="checkbox"
                                    name="showComponentText"
                                    id="showComponentText"
                                    onClick={(event: MouseEvent<HTMLInputElement>) => (
                                        setShowComponentText(event.currentTarget.checked)
                                    )}
                                    defaultChecked={showComponentText ? true : false}
                                />
                                <label htmlFor="showComponentText">Show label</label>
                            </div>
                            <div className="checkboxGroup">
                                <input
                                    type="checkbox"
                                    name="showComponentIcon"
                                    id="showComponentIcon"
                                    onClick={(event: MouseEvent<HTMLInputElement>) => (
                                        setShowComponentIcon(event.currentTarget.checked)
                                    )}
                                    defaultChecked={showComponentIcon ? true : false}
                                />
                                <label htmlFor="showComponentIcon">Show icon</label>
                            </div>
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
                                <label htmlFor="showComponentSpecs">Show component specs</label>
                            </div>
                        </fieldset>
                    </div>

                    <ComponentSpecs
                        showSpecs={showSpecs}
                        showComponentIcon={showComponentIcon}
                        showComponentText={showComponentText}
                    />
                </main>
            </div>
        </>
    );
};
