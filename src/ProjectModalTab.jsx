import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OapFuzzySearching from "../assets/project/OAP-fuzzy-searching.jsx";
import OAPAdvancedMap from "../assets/project/OAP-advanced-map.jsx";
import OAPElectionPromotion from "../assets/project/OAP-election-promotion.jsx";


const ProjectModalTab = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Fuzzy searching</Tab>
                <Tab>Map</Tab>
                <Tab>Election</Tab>
            </TabList>

            <TabPanel>
                <OapFuzzySearching/>
            </TabPanel>
            <TabPanel>
                <OAPAdvancedMap/>
            </TabPanel>
            <TabPanel>
                <OAPElectionPromotion/>
            </TabPanel>
        </Tabs>
    );
};

export default ProjectModalTab;