import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
  return (
    <div className = 'sidebar'>
      <div className="top">
        <span className = "logo">logo</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon classname = "icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlinedIcon classname = "icon"/>
            <span>User</span>
          </li>
          <li>
            <StoreIcon classname = "icon"/>
            <span>Product</span>
          </li>
          <li>
            <CreditCardIcon classname = "icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon classname = "icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">STATS</p>
          <li>
            <InsertChartIcon classname = "icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon classname = "icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon classname = "icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon classname = "icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon classname = "icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon classname = "icon"/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon classname = "icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    
    </div>

  )
}

export default Sidebar;