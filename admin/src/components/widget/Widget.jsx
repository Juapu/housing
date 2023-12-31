import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;
  //temporary counter
  const amount = 100;
  const diff = 20;
  if (type === "user") {
    data = {
        title: "USERS",
        isMoney: false,
        link: "View all users",
        icon: (
          <PersonOutlinedIcon 
            className = "icon"
            style = {{
                color: "crimson",
                backgroundColor: "rgba(255,0,0,0.2)"
            }}
          />
        ),
    }
  } else if (type === "order") {
    data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className = "icon"
            style = {{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
            }}
          />
        ),
    }
  } else if (type === "earnings") {
    data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className = "icon"
            style = {{
                backgroundColor: "rgba(0, 128, 0, 0.2)",
                color: "green",
            }}
          />
        ),
    }
  } else if (type === "balance") {
    data = {
        title: "BALANCES",
        isMoney: true,
        link: "View all balances",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className = "icon"
            style = {{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
            }}
          />
        ),
    }
  }
  return (
    <div className = "widget">
        <div className="left">
            <span classname = "title">{data.title}</span>
            <span className = "counter">
                {data.isMoney && "$"} {amount}
            </span>
            <span className = "link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget