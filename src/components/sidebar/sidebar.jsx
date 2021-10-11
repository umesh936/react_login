import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
  Storefront,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Mailer </h3>
          <ul className="sidebarList">
            <Link to="/summary" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Monthly Summary
              </li>
            </Link>
            <Link to="/campaign" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Active Campaign
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Account</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              User Manage
            </li>
            <Link to="/logout" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                logout
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
