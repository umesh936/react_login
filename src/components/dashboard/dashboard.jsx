import React from "react";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/sidebar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AuthRoute from "../../routes/AuthRoute";
import SummaryList from "../Summary/summaryList";
import Home from "../home/Home";

function Dashboard() {
    return (
        <Router>
            <Topbar/>
            <div className="container">
                <Sidebar/>

                <Switch>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <AuthRoute exact path="/summary">
                        <SummaryList/>
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