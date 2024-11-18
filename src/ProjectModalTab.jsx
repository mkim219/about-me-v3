import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OapFuzzySearching from "../assets/project/OAP-fuzzy-searching.jsx";
import OAPAdvancedMap from "../assets/project/OAP-advanced-map.jsx";
import OAPElectionPromotion from "../assets/project/OAP-election-promotion.jsx";
import OAPFacebookIntegration from "../assets/project/OAP-facebook-integration";

const ProjectModalTab = (props) => {
    const {
        language,
        t,
    } = props
    return (
        <Tabs>
            <TabList>
                <Tab>Fuzzy searching</Tab>
                <Tab>Map</Tab>
                <Tab>Election</Tab>
                <Tab>OAuth 2.0 Integration</Tab>
            </TabList>

            <TabPanel>
                <OapFuzzySearching
                    language={language}
                    t={t}
                />
            </TabPanel>
            <TabPanel>
                <OAPAdvancedMap/>
            </TabPanel>
            <TabPanel>
                <OAPElectionPromotion/>
            </TabPanel>
            <TabPanel>
                <OAPFacebookIntegration/>
            </TabPanel>
        </Tabs>
    );
};

export default ProjectModalTab;