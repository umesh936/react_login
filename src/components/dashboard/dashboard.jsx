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
import SmtpReport from "../smtp/smtpReport";

function Dashboard() {
    return (
        <Router>
            <Topbar/>
            <div className="">
                <Sidebar/>
                <Switch>
                    <AuthRoute exact path="/home">
                        <Home/>
                    </AuthRoute>
                    <AuthRoute exact path="/smtp">
                        <SmtpReport/>
                    </AuthRoute>
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
                    <AuthRoute path="*">
                        <div>404 Not found</div>
                    </AuthRoute>

                </Switch>
            </div>
        </Router>
    );
}

export default Dashboard;