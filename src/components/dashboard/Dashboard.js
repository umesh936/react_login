import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import React from "react";
import {GetData, logoutProfile} from "../../utils/utils";
import {getId} from "../../utils/localRetrieve";
import {storeSummary, storeUser} from "../../utils/localStore";
import {postData } from '../../utils/utils';
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../login/Login";
import AuthRoute from "../../routes/AuthRoute";
import Summary from "../Summary/Summary";
import {ToastContainer} from "react-toastify";

function Dashboard () {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSummary = async () => {
        try {
            const response = await GetData();
            if (response !== undefined) {
                storeSummary(response.summary);
                //history.push('/summary');
            }
        } catch (err) {
            console.log("Error: {}")
        }
    };

    const handleDetail = (event) => {
        // TODO : call detail api
    };
    const handleLogout = (event) => {
        logoutProfile(getId()).then(() =>
        {
            console.log("logout");
        });
    };

    return (
        <Router>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Switch>
                    <Route exact path="/home">
                        <Login/>
                    </Route>
                    <AuthRoute exact path="/summary">
                        <Summary/>
                    </AuthRoute>
                    <AuthRoute exact path="/logout">
                        <Summary/>
                    </AuthRoute>
                    <Route path="*">
                        <div>404 Not found </div>
                    </Route>

                </Switch>
            </div>

            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Router>
    );
}

export default Dashboard;