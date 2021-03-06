import "./sidebar.css";
import {
    LineStyle,
    Timeline,
    PermIdentity,
    Storefront,
    WorkOutline,
    Report,
} from "@material-ui/icons";
import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/home" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon"/>
                                Home
                            </li>
                        </Link>
                        <Link to="/smtp" className="link">
                            <li className="sidebarListItem">
                                <Report className="sidebarIcon"/>
                                SMTP Reports
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Mailer </h3>
                    <ul className="sidebarList">
                        <Link to="/active" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon"/>
                                Active Campaign
                            </li>
                        </Link>
                        <Link to="/summary" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon"/>
                                Summary
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Account</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon"/>
                            User Manage
                        </li>
                        <Link to="/settings" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon"/>
                                Setting
                            </li>
                        </Link>
                        <Link to="/logout" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon"/>
                                logout
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}
