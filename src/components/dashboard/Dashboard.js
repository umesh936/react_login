import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import React from "react";
import {logoutProfile} from "../../utils/utils";
import {getId} from "../../utils/localRetrieve";
import {storeUser} from "../../utils/localStore";
import {postData } from '../../utils/utils';

function Dashboard () {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSummary = async () => {
        const clientId = getId();
        try {
            const response = await postData('GET', data, 'v1/emailer/'+${clientId}'/summary');
            if (response !== undefined) {
                storeSummary(response.summary, response.clientId);
                history.push('/summary');
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
        <div
            style={{
                marginLeft: "40%",
            }}
        >
            <h2>Welcome Emailer Dashbaord</h2>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                Menu
            </Button>
            <Menu
                keepMounted
                anchorEl={anchorEl}
                onClose={handleClose}
                open={Boolean(anchorEl)}
            >
                <MenuItem onClick={handleSummary}>Summary</MenuItem>
                <MenuItem onClick={handleDetail}>Details</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default Dashboard;