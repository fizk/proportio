import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TypographyView from './views/TypographyView';
import ShapesView from './views/ShapesView';
import ComponentsView from './views/ComponentsView';
import Header from './views/Header';
import ExportDialog from './elements/ExportDialog';
import ContainerView from './views/ContainerView';
import ColorView from './views/ColorView';
import AliasesView from './views/AliasesView';
import CubicBezierView from './views/CubicBezierView';
import { BaseProvider } from './context/BaseContext'
import './styles/app.css';
import './styles/formElements.css';

export default function App() {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <BaseProvider>
            <div className="App">
                <ExportDialog showModal={showModal} setShowModal={setShowModal} />
                <Tabs className="App_tabs">
                    <Header setShowModal={setShowModal}>
                        <TabList className="App_tabsList">
                            <Tab className="App_tab">Typography</Tab>
                            <Tab className="App_tab">Shape</Tab>
                            <Tab className="App_tab">Components</Tab>
                            <Tab className="App_tab">Containers</Tab>
                            <Tab className="App_tab">Color</Tab>
                            <Tab className="App_tab">Cubic Bézier</Tab>
                            <Tab className="App_tab">Aliases</Tab>
                        </TabList>
                    </Header>
                    <TabPanel className="App_tabPanel">
                        <TypographyView />
                    </TabPanel>
                    <TabPanel className="App_tabPanel">
                        <ShapesView />
                    </TabPanel>
                    <TabPanel className="App_tabPanel">
                        <ComponentsView />
                    </TabPanel>
                    <TabPanel className="App_tabPanel">
                        <ContainerView />
                    </TabPanel>
                    <TabPanel className="App_tabPanel">
                        <ColorView />
                    </TabPanel>
                    <TabPanel className="App_tabPanel">
                        <CubicBezierView />
                    </TabPanel>
                    <TabPanel className="App_tabPanel">
                        <AliasesView />
                    </TabPanel>
                </Tabs>
            </div>
        </BaseProvider>
    );
}
