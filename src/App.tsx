import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TypographyView from './views/TypographyView';
import ShapesView from './views/ShapesView';
import ComponentsView from './views/ComponentsView';
import Header from './components/Header';
import ExportDialog from './components/ExportDialog';
import ContainerView from './views/ContainerView';
import ColorView from './views/ColorView';

import './styles/app.css';
import './styles/formElements.css';

export default function App() {

     /* Just to align icon examples with typography */
    const iconLineHeight = 1.375;
    const spacerLineHeight = iconLineHeight;

    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <RecoilRoot>
            <div className="App">
                <ExportDialog showModal={showModal} setShowModal={setShowModal} />
                <Tabs className="App_tabs">
                    <Header showModal={showModal} setShowModal={setShowModal}>
                        <TabList className="App_tabsList">
                            <Tab className="App_tab">Typography</Tab>
                            <Tab className="App_tab">Shape</Tab>
                            <Tab className="App_tab">Components</Tab>
                            <Tab className="App_tab">Containers</Tab>
                            <Tab className="App_tab">Color</Tab>
                        </TabList>
                    </Header>

                    <TabPanel className="App_tabPanel">
                        <TypographyView iconLineHeight={iconLineHeight} />
                    </TabPanel>
                    <TabPanel className="App_tabPanel">
                        <ShapesView spacerLineHeight={spacerLineHeight} />
                    </TabPanel>
                    <TabPanel className="App_tabPanel">
                        <ComponentsView iconLineHeight={iconLineHeight} />
                    </TabPanel>
                    <TabPanel className="App_tabPanel">
                        <ContainerView />
                    </TabPanel>
                    <TabPanel className="App_tabPanel">
                        <ColorView />
                    </TabPanel>
                </Tabs>
            </div>
        </RecoilRoot>
    );
}
