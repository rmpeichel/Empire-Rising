import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import LoginPage from "../Common/LoginPage/LoginPage";
import OverviewPage from "./OverviewPage/OverviewPage";
import BuildingsPage from "./BuildingsPage/BuildingsPage";
import ResearchPage from "./ResearchPage/ResearchPage";
import ShipsPage from "./ShipsPage/ShipsPage";
import FleetPage from "./FleetPage/FleetPage";
import DefensePage from "./DefensePage/DefensePage";
import StatsPage from "./StatsPage/StatsPage";
import UpgradesPage from "./UpgradesPage/UpgradesPage";


export default class PlayerView extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/player" element={<OverviewPage />}/>
                <Route path="/overview" element={<OverviewPage />}/>
                <Route path="/buildings" element={<BuildingsPage />}/>
                <Route path="/research" element={<ResearchPage />}/>
                <Route path="/ships" element={<ShipsPage />}/>
                <Route path="/fleet" element={<FleetPage />}/>
                <Route path="/defenses" element={<DefensePage />}/>
                <Route path="/stats" element={<StatsPage />}/>
                <Route path="/upgrades" celement={<UpgradesPage />}/>
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
        );
    }
}

