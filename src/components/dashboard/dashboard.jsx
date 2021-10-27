import React from "react";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/sidebar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AuthRoute from "../../routes/AuthRoute";
import ActiveList from "../Active/activeList";
import Home from "../home/Home";
import Logout from "../logout/logout";
import SummaryList from "../Summary/summaryList";
import SettingList from "../settings/settingList";

function Dashboard() {
    return (
        <Router>
            <Topbar/>
            <div className="">
                <Sidebar/>
                <Switch>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <AuthRoute exact path="/active">
                        <ActiveList/>
                    </AuthRoute>
                    <AuthRoute exact path="/summary">
                        <SummaryList/>
                    </AuthRoute>
                    <AuthRoute exact path="/settings">
                        <SettingList/>
                    </AuthRoute>
                    <AuthRoute exact path="/logout">
                        <Logout/>
                    </AuthRoute>
                    <Route path="*">
                        <div>404 Not found</div>
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default Dashboard;